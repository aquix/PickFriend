using System.Threading.Tasks;
using PickFriend.Web.Models;

namespace PickFriend.Web.Hubs
{
    public interface IUsersHub
    {
        Task NotifyUserAdded(UserFullInfo user);
        Task NotifyUserStateChanged(UserShortInfo userInfo);
    }
}
