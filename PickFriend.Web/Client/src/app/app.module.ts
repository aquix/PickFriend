import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
    declarations: [AppComponent, MainComponent, LoginComponent, RegisterComponent, ProfileComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }