import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import CustomValidators from '../custom-validators';


@Component({
    selector: 'register-page',
    template: require('./register.html')
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            login: ['', [Validators.required, Validators.minLength(3)]],
            passwords: this.formBuilder.group({
                password: ['', [CustomValidators.password]],
                passwordConfirmation: ['']
            }, {
                validator: CustomValidators.passwordsEqual
            }),
            name: ['', Validators.required]
        });
    }

    onRegisterClick() {
        console.log('register');
    }
}