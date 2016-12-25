using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace PickFriend.Web.Hubs
{
    public class UsersHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}