import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contact-list.component';

const CONTACT_LIST_ROUTES:Routes = [
    { path: 'contacts', component: ContactListComponent }
];

export const CONTACT_LIST_ROUTING = RouterModule.forChild(CONTACT_LIST_ROUTES);
