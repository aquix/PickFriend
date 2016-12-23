import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AppConfig } from '../app.config';
import { AuthInfoStorage } from './auth-info-storage.service';
import { IAuthInfo } from './auth-info.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
    private static TOKEN_PATH = '/token';

    constructor(
        private http: Http,
        private authTokenService: AuthInfoStorage
    ) { }

    register(username: string, password: string, passwordConfirmation: string) {
        return this.http.post(`${AppConfig.API_PATH}/account/register`, {
            username: username,
            password: password,
            confirmPassword: passwordConfirmation
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