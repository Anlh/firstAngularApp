import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {AccountsService} from './accounts.service';
import {LoggingService} from "./logging.service";

@NgModule({
    declarations: [
        AppComponent,
        AccountComponent,
        NewAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    // Set the AccountsService and LoggingService instances here, and all the child components will inherit from this instance(will all the access to this instance)
    providers: [AccountsService, LoggingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
