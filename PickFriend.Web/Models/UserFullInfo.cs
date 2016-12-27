using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickFriend.Web.Models
{
    public class UserFullInfo
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string AboutMe { get; set; }
        public int Age { get; set; }
        public bool IsOnline { get; set; }

        public Location Location { get; set; }
    }
}