import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AccountService } from '../account/account.service';

@Component({
    selector: 'main-page',
    template: require('./main.html')
})
export class MainComponent implements OnInit {
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