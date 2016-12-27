import { Injectable } from '@angular/core';

import { AppConfig } from '../app.config';
import { AuthInfoStorage } from '../account/auth-info-storage.service';

import { UsersHubServer } from './users-hub.server';
import { UsersHubClient } from './users-hub.client';

@Injectable()
export class UsersHub {
    private server: UsersHubServer;
    private client: UsersHubClient;

    constructor(
        private authInfoStorage: AuthInfoStorage
    ) {
        if (window['$'] === undefined || window['$'].hubConnection === undefined) {
            throw new Error('The variable $ or the .hubConnection() function are not defined...please check the SignalR scripts have been loaded properly');
        }

        let usersHub = $.connection['usersHub'];
        $.connection.hub.url = `${AppConfig.SERVER}/signalr`;

        this.client = new UsersHubClient(usersHub);
        this.server = new UsersHubServer(usersHub);

        $.connection.hub.start().done(() => {
            console.log('I am connected to hub');
            this.server.userUpdated(this.authInfoStorage.authInfo.id);
        });
    }
}