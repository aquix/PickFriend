import { UserShortInfo } from '../users/user-short-info';
import { User} from '../users/user';

export class UsersHubClient {
    constructor(private usersHub: any) {
        usersHub.client.notifyUserStateChanged = this.notifyUserStateChanged;
    }

    notifyUserStateChanged(user: UserShortInfo) {
        console.log(`User ${user.id} updated`);
    }

    notifyUserAdded(user: User) {
        console.log(`User ${user.id} added`);
    }
};
