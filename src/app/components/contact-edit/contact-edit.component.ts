
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';
const COUNTRIES = require('country-list')();

import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../common/contact';

@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html'
})

export class ContactEditComponent implements OnInit {

    contactForm: FormGroup;
    contact: Contact;
    paramId: any;
    isEdit: boolean;
    countryList: any[];
    countrySelected: string;

    constructor(private contactsService: ContactsService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder) {

        this.route.params.subscribe(params => this.paramId = params['id']);

        this.contactForm = this.formBuilder.group({
            'firstName': [null, Validators.required],
            'lastName': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
            'email': [null, Validators.compose([Validators.required, Validators.email])],
            'country': [null, Validators.required]
        });
    }

    ngOnInit() {

        this.countryList = COUNTRIES.getNames();

        this.contactsService.getContact(this.paramId)
            .then(contact => {
                this.contact = contact;

                if (this.paramId) {
                    this.isEdit = true;
                    this.contactForm.setValue({
                        firstName: this.contact.firstName,
                        lastName: this.contact.lastName,
                        email: this.contact.email,
                        country: this.contact.country
                    });
                }
            });
    }

    public submitForm(value: any) {
        if (this.paramId) {
            value.id = this.paramId;
            this.contactsService.editContact(value);
        } else {
            let form = {
                'id' : UUID.UUID(),
                'firstName' : value.firstName,
                'lastName' : value.lastName,
                'email': value.email,
                'country': value.country
            };
            this.contactsService.createContact(form);
        }
        this.contactForm.reset();
    }

    public delete() {
        this.contactsService.deleteContact(this.paramId);
    }

}



