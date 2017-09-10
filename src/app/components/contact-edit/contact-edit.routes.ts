import { RouterModule, Routes } from '@angular/router';

import { ContactEditComponent } from './contact-edit.component';

const CONTACT_EDIT_ROUTES:Routes = [
    { path: 'edit/:id', component: ContactEditComponent },
    { path: 'add', component: ContactEditComponent }
];

export const CONTACT_EDIT_ROUTING = RouterModule.forChild(CONTACT_EDIT_ROUTES);
