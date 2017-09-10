import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { CONTACT_EDIT_ROUTING } from './contact-edit.routes';

// Services
import { WindowRefService } from '../../services/window-ref.service';
import { ContactsService } from '../../services/contacts.service';

// Components
import { ContactEditComponent } from './contact-edit.component';


@NgModule({
    imports: [
        CommonModule,
        CONTACT_EDIT_ROUTING,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ContactEditComponent
    ],
    providers: [
        WindowRefService,
        ContactsService
    ]
})

export class ContactEditModule {}
