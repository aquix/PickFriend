import { Injectable } from '@angular/core';
import { IAuthInfo } from './auth-info.interface';

@Injectable()
export class AuthInfoStorage {
    private _authInfo: IAuthInfo;

    constructor() { }

    get authInfo() {
        return this._authInfo;
    }

    set authInfo(value: IAuthInfo) {
        this._authInfo = value;
    }
}