using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using PickFriend.Web.Models;

namespace PickFriend.Web.Hubs
{
    public class UsersHub : Hub<IUsersHub>
    {
        public override Task OnConnected()
        {
            Debug.Print($"User connected {Context.User.Identity.Name}");

            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            Debug.Print($"User disconnected {Context.User.Identity.Name}");

            return base.OnDisconnected(stopCalled);
        }

        public void UserUpdated(string id)
        {
            Debug.Print($"User {id} state changed");
            Clients.All.NotifyUserUpdated(new UserShortInfo
            {
                Id = id
            });
        }
    }
}