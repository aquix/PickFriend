import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
    constructor() { }

    getUsers() : User[] {
        // mock

        return [
            {
                id: '1',
                isOnline: true,
                name: 'Vlad',
                aboutme: 'funny',
                age: 19,
                location: {
                    latitude: 53.3045,
                    longitude: 27.4615
                }
            },
            {
                id: '2',
                isOnline: true,
                name: 'Maks',
                aboutme: 'dib',
                age: 18,
                location: {
                    latitude: 54.9045,
                    longitude: 28.5615
                }
            }
        ]
    }
}