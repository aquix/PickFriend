import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';

import { AccountService } from './account/account.service';
import { AuthInfoStorage } from './auth/auth-info-storage.service';
import { AuthGuard } from './account/auth-guard.service';
import { UserService } from './users/user.service';
import { LocationService } from './location/location.service';
import { UsersHub } from './signalr/users.hub';
import { AuthHttp } from './auth/auth-http.service';

import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MapComponent } from './main/map/map.component';

const GMAPS_API_KEY = require('json!../secretconfig.json').gmapsApiKey;

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpModule,
        AgmCoreModule.forRoot({
            apiKey: GMAPS_API_KEY
        })
    ],
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        MapComponent
    ],
    providers: [
        AccountService,
        AuthInfoStorage,
        AuthGuard,
        UserService,
        LocationService,
        UsersHub,
        AuthHttp
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }