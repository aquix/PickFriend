import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor() { }

    getUsers() : User[] {
        // mock

        return [
            {
                name: 'Vlad',
                aboutme: 'funny',
                age: 19,
                coordLat: 53.3045,
                coordLng: 27.4615
            },
            {
                name: 'Maks',
                aboutme: 'dib',
                age: 18,
                coordLat: 54.9045,
                coordLng: 28.5615
            }
        ]
    }
}