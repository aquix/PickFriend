using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using PickFriend.Data.Context;
using PickFriend.Web.Models;

namespace PickFriend.Web.Controllers
{
    [Authorize]
    public class UsersController : ApiController
    {
        private AppDbContext _db;

        public UsersController(AppDbContext dbContext)
        {
            _db = dbContext;
        }

        public Task<IEnumerable<UserFullInfo>> Get()
        {
            var users = _db.Users.ToList().Select(u => new UserFullInfo
            {
                Id = u.Id,
                Name = u.UserInfo.Name,
                AboutMe = u.UserInfo.AboutMe,
                Age = u.UserInfo.Age,
                IsOnline = u.LocationInfo?.Online ?? false,
                Location = new Location
                {
                    Latitude = u.LocationInfo?.Latitude ?? 0,
                    Longitude = u.LocationInfo?.Longitude ?? 0
                }
            });

            return Task.FromResult(users);
        }
    }
}
