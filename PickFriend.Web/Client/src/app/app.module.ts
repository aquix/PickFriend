import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';

import { AccountService } from './account/account.service';
import { AuthInfoStorage } from './account/auth-info-storage.service';
import { AuthGuard } from './account/auth-guard.service';

import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

const GMAPS_API_KEY = require('json!../secretconfig.json').gmapsApiKey;


@NgModule({
    imports: [BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: GMAPS_API_KEY
        })],
    declarations: [AppComponent, MainComponent, LoginComponent, RegisterComponent, ProfileComponent],
    providers: [AccountService, AuthInfoStorage, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }