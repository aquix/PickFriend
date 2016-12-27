using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PickFriend.Web.Models
{
    public class UserShortInfo
    {
        public string Id { get; set; }
        public bool IsOnline { get; set; }
        public Location Location { get; set; }
    }
}