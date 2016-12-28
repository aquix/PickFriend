import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CustomValidators from '../custom-validators';

import { AccountService } from '../account.service';
import { LocationService } from '../../location/location.service';
import { RegisterModel } from './register-model.interface';

@Component({
    selector: 'register-page',
    template: require('./register.html')
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private accountService: AccountService,
        private locationService: LocationService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            passwords: this.formBuilder.group({
                password: ['', [CustomValidators.password]],
                passwordConfirmation: ['']
            }, {
                validator: CustomValidators.passwordsEqual
            }),
            name: ['', Validators.required]
        });
    }

    onRegisterClick({ value }: { value: RegisterModel }) {
        this.accountService.register(value).subscribe(res => {
            console.log('Registered', res);
        });
    }
}