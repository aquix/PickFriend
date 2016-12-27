import { Location } from '../location/location.interface';

export interface UserShortInfo {
    id: string;
    isOnline: boolean;
    location: Location;
};
