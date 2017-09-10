
import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../common/contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
})

export class ContactListComponent implements OnInit {

    contacts: Contact[];

    constructor(private contactsService: ContactsService) {}

    ngOnInit() {
        this.contactsService.getContacts().then(contacts => {
            this.contacts = contacts;
        });
    }
}
