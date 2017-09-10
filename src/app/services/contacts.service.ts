import { Injectable } from '@angular/core';

import { WindowRefService } from '../services/window-ref.service';
import { contactsDefault } from '../common/sample-data';
import { Contact } from '../common/contact';

@Injectable()
export class ContactsService {
    contacts: Contact[] = [];
    private localStorage: any;
    private storageOk: boolean;

    constructor(private windowService: WindowRefService) {
        this.localStorage = windowService.nativeWindow['localStorage'];

        if (typeof (Storage) !== 'undefined') {
            this.storageOk = true;
            if (this.localStorage.getItem('contacts') === null) {
                this.localStorage.setItem('contacts', JSON.stringify(contactsDefault));
            }
        } else {
            this.storageOk = false;
            console.log('Sorry! No Web Storage support...');
        };
    }

    getContacts(): Promise<Contact[]> {
        if (this.storageOk) {
            if (this.localStorage.contacts) {
                this.contacts = JSON.parse(this.localStorage.getItem('contacts'));
                return Promise.resolve(this.contacts);
            }
        }
    }

    getContact(id: string): Promise<Contact> {
        return this.getContacts()
            .then(contacts => contacts.find(contact => contact.id === id));
    }

    createContact(contact: Contact) {
        this.contacts.unshift(contact);
        this.updateContacts(this.contacts);
    }

    deleteContact(id: string) {
        let index = this.contacts.findIndex(item => item.id === id);
        this.contacts.splice(index, 1);
        this.updateContacts(this.contacts);
    }

    editContact(contact: Contact) {
        let index = this.contacts.findIndex(item => item.id === contact.id);
        this.contacts[index] = contact;
        this.updateContacts(this.contacts);
    }

    updateContacts(contacts: Contact[]) {
        this.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
}
