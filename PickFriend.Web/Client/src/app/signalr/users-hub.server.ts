export class UsersHubServer {
    constructor(private usersHub: any) { }

    userUpdated(id: string) {
        this.usersHub.server.userUpdated(id);
    }
};
