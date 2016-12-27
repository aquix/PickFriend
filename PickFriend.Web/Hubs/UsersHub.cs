using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;
using PickFriend.Data.Context;
using PickFriend.Data.Entities;
using PickFriend.Web.Models;

namespace PickFriend.Web.Hubs
{
    public class UsersHub : Hub<IUsersHub>
    {
        private AppDbContext _dbContext;

        public UsersHub(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

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

        public async Task UserAdded(UserFullInfo user)
        {
            await Clients.Others.NotifyUserAdded(user);
        }

        public async Task UserStateChanged(UserShortInfo user)
        {
            var userLocationInfo = _dbContext.LocationInfoes.Find(user.Id);

            if (userLocationInfo != null)
            {
                userLocationInfo.Online = user.IsOnline;
                userLocationInfo.Latitude = user.Location.Latitude;
                userLocationInfo.Longitude = user.Location.Longitude;

                await _dbContext.SaveChangesAsync();
            }

            await Clients.Others.NotifyUserStateChanged(user);
        }
    }
}