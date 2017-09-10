import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES:Routes = [
    { path: '**', pathMatch: 'full', redirectTo: 'contacts' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
