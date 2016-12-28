import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';
import { AuthInfoStorage } from './auth-info-storage.service';
import { IAuthInfo } from './auth-info.interface';
import { RegisterModel } from './register/register-model.interface';

@Injectable()
export class AccountService {
    private static TOKEN_PATH = `${AppConfig.SERVER}/token`;

    constructor(
        private http: Http,
        private authTokenService: AuthInfoStorage
    ) { }

    register(regInfo: RegisterModel) {
        return this.http.post(`${AppConfig.API_PATH}/account/register`, {
            username: regInfo.username,
            password: regInfo.passwords.password,
            confirmPassword: regInfo.passwords.passwordConfirmation,
            name: regInfo.name
        }).map(res => res.status);
    }

    login(username: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        let body = `grant_type=password&username=${username}&password=${password}`;

        return this.http.post(AccountService.TOKEN_PATH, body, {
            headers: headers
        }).map(res => res.json()).map(data => {
            let tokenInfo: IAuthInfo = {
                token: data['access_token'],
                tokenType: data['token_type'],
                username: data['userName'],
                id: data['userId']
            };

            this.authTokenService.authInfo = tokenInfo;
            return tokenInfo;
        });
    }

    logout() {
        this.authTokenService.authInfo = null;
    }

    get isAuthorized() {
        if (this.authTokenService.authInfo) {
            return true;
        }

        return false;
    }
}