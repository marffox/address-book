import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { CONTACT_LIST_ROUTING } from './contact-list.routes';

// Services
import { WindowRefService } from '../../services/window-ref.service';
import { ContactsService } from '../../services/contacts.service';

// Components
import { ContactListComponent } from './contact-list.component';


@NgModule({
    imports: [
        CommonModule,
        CONTACT_LIST_ROUTING
    ],
    declarations: [
        ContactListComponent
    ],
    providers: [
        WindowRefService,
        ContactsService
    ]
})

export class ContactListModule {}
