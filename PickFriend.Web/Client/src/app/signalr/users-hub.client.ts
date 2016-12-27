export class UsersHubClient {
    constructor(private usersHub: any) {
        usersHub.client.notifyUserUpdated = this.notifyUserUpdated;
    }

    notifyUserUpdated(id: string) {
        console.log(`User ${id} updated`);
    }
};
