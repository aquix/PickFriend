import { Component, OnInit } from '@angular/core';

import { User } from '../../users/user';
import { UserService } from '../../users/user.service';
import { LocationService } from '../../location/location.service';
import { UsersHub } from '../../signalr/users.hub';
import { AuthInfoStorage } from '../../account/auth-info-storage.service';

import './map.scss';

@Component({
    selector: 'map',
    template: require('./map.html'),
    providers: []
})
export class MapComponent implements OnInit {
    users: User[];
    myLatitude: number = 0;
    myLongitude: number = 0;

    constructor(
        private userService: UserService,
        private locationService: LocationService,
        private authInfoStorage: AuthInfoStorage,
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

        this.locationService.addLocationChangeListener(loc => {
            console.log('Location changed: ' + loc);
            this.myLatitude = loc.latitude;
            this.myLongitude = loc.longitude;

            this.usersHub.userStateChanged({
                id: this.authInfoStorage.authInfo.id,
                isOnline: true,
                location: {
                    latitude: loc.latitude,
                    longitude: loc.longitude
                }
            });
        });
    }

    onMarkerClick() {
        console.log('marker click');
    }
}