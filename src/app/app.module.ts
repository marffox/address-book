import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactListModule } from './components/contact-list/contact-list.module';
import { ContactEditModule } from './components/contact-edit/contact-edit.module';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';


@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        NgbModule.forRoot(),
        APP_ROUTING,
        ContactListModule,
        ContactEditModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { };
