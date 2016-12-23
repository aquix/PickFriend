import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CustomValidators from '../custom-validators';

import { AccountService } from '../account.service';
import { LoginModel } from './login-model.interface';

@Component({
    selector: 'login-page',
    template: require('./login.html')
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [CustomValidators.password]]
        });
    }

    onLoginClick({ value }: { value: LoginModel }) {
        this.accountService.login(value.username, value.password)
            .subscribe(res => {
                this.router.navigate(['/']);
            }, err => {
                this.errorMessage = err.json()['error_description'];
            });
    }
}