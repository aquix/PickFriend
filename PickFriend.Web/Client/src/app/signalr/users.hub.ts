import { Injectable } from '@angular/core';

import { AppConfig } from '../app.config';
import { AuthInfoStorage } from '../auth/auth-info-storage.service';
import { User } from '../users/user';
import { UserShortInfo } from '../users/user-short-info';
import { UsersHubClient } from './users-hub.client';

@Injectable()
export class UsersHub {
    private hub: any;
    private client: UsersHubClient;
    private isConnected = false;
    private waitingActions: (() => void)[] = [];

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
            this.onConnected();
        });
    }

    userAdded(user: User) {
        this.doWhenConnected(() => {
            this.hub.server.userAdded(user);
        });
    }

    userStateChanged(user: UserShortInfo) {
        console.log('user state changed before', user);
        this.doWhenConnected(() => {
            this.hub.server.userStateChanged(user);
            console.log('user state changed after', user);
        });
    }

    private doWhenConnected(action: () => void) {
        if (this.isConnected) {
            action();
        } else {
            this.waitingActions.push(action);
        }
    }

    private onConnected() {
        this.isConnected = true;
        for (let action of this.waitingActions) {
            setTimeout(action, 0);
        }

        this.waitingActions = [];
    }
}