import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account/account.service';
import { UserService } from './user.service';
import { User } from './user.model';

import './main.scss';

@Component({
    selector: 'main-page',
    template: require('./main.html')
})
export class MainComponent implements OnInit {
    users: User[];
    myLatitude: number;
    myLongitude: number;

    constructor(
        private router: Router,
        private accountService: AccountService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.users = this.userService.getUsers();
        console.log(this.users);

        this.myLatitude = 53.8045;
        this.myLongitude = 27.5615;
    }

    onLogoutClick() {
        this.accountService.logout();
        this.router.navigate(['/login']);
    }

    onMarkerClick() {
        console.log('marker click');
    }
}