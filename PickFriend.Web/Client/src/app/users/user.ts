import { Location } from '../location/location.interface';

export interface User {
    id: string;
    name: string;
    aboutme: string;
    age: number;
    isOnline: boolean;
    location: Location;
};
