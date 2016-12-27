import { Injectable } from '@angular/core';

import { AppConfig } from '../app.config';
import { AuthInfoStorage } from '../account/auth-info-storage.service';

import { User } from '../users/user';
import { UserShortInfo } from '../users/user-short-info';

import { UsersHubClient } from './users-hub.client';

@Injectable()
export class UsersHub {
    private hub: any;
    private client: UsersHubClient;

    constructor(
        private authInfoStorage: AuthInfoStorage
    ) {
        if (window['$'] === undefined || window['$'].hubConnection === undefined) {
            throw new Error('The variable $ or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly');
        }

        this.hub = $.connection['usersHub'];
        $.connection.hub.url = `${AppConfig.SERVER}/signalr`;

        this.client = new UsersHubClient(this.hub);

        $.connection.hub.start().done(() => {
            console.log('I am connected to hub');
        });
    }

    userAdded(user: User) {
        this.hub.server.userAdded(user);
    }

    userStateChanged(user: UserShortInfo) {
        this.hub.server.userStateChanged(user);
    }
}