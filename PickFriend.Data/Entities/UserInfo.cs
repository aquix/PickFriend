using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PickFriend.Data.Entities
{
    public class UserInfo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string AboutMe { get; set; }

        public virtual User User { get; set; }
    }
}
