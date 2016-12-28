import { Injectable } from '@angular/core';

import { AuthHttp } from '../auth/auth-http.service';
import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    constructor(
        private authHttp: AuthHttp
    ) { }

    getUsers() {
        return this.authHttp.get(`${AppConfig.API_PATH}/users`).map(res => {
            return res.json();
        });
    }
}