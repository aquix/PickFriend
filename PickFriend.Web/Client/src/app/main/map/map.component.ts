import { Component, OnInit } from '@angular/core';

import { User } from '../../users/user';
import { UserService } from '../../users/user.service';
import { LocationService } from '../../location/location.service';
import { Location } from '../../location/location.interface';
import { UsersHub } from '../../signalr/users.hub';
import { AuthInfoStorage } from '../../auth/auth-info-storage.service';

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
        this.userService.getUsers().subscribe(data => {
            this.users = data;
            console.log(this.users);
        });

        this.locationService.getCurrentLocation().then(location => {
            console.log('Map init', location);
            this.locationChanged(location);
        });

        this.locationService.addLocationChangeListener(location => {
            console.log('Location changed: ' + location);
            this.locationChanged(location);
        });
    }

    onMarkerClick() {
        console.log('marker click');
    }

    private locationChanged(loc: Location) {
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
    }
}