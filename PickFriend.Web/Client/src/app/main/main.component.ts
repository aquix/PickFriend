import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account/account.service';

import './main.scss';

@Component({
    selector: 'main-page',
    template: require('./main.html')
})
export class MainComponent implements OnInit {
    lat: number = 53.9045;
    lng: number = 27.5615;

    constructor(
        private router: Router,
        private accountService: AccountService
    ) { }

    ngOnInit() { }

    onLogoutClick() {
        this.accountService.logout();
        this.router.navigate(['/login']);
    }
}