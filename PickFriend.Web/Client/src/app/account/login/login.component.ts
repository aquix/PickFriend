import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CustomValidators from '../custom-validators';

@Component({
    selector: 'login-page',
    template: require('./login.html')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            login: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [CustomValidators.password]]
        })
    }

    onLoginClick() {
        console.log('login');
    }
}