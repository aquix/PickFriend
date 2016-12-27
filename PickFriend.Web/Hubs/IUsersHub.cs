using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using PickFriend.Data.Entities;
using PickFriend.Web.Models;

namespace PickFriend.Web.Hubs
{
    public interface IUsersHub
    {
        Task NotifyUserAdded(UserFullInfo user);
        Task NotifyUserStateChanged(UserShortInfo userInfo);
    }
}
