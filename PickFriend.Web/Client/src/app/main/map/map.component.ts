import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user.model';
import { UserService } from '../../users/user.service';
import { LocationService } from './location/location.service';

import { UsersHub } from '../../signalr/users.hub';

import './map.scss';

@Component({
    selector: 'map',
    template: require('./map.html'),
    providers: [UsersHub]
})
export class MapComponent implements OnInit {
    users: User[];
    myLatitude: number = 0;
    myLongitude: number = 0;

    constructor(
        private userService: UserService,
        private locationService: LocationService,
        private usersHub: UsersHub
    ) { }

    ngOnInit() {
        this.users = this.userService.getUsers();
        console.log(this.users);

        this.locationService.getCurrentLocation().then(location => {
            console.log(location);
            this.myLatitude = location.latitude;
            this.myLongitude = location.longitude;
        });
    }

    onMarkerClick() {
        console.log('marker click');
    }
}