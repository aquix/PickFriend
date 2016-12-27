using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PickFriend.Data.Entities
{
    public class LocationInfo
    {
        public string Id { get; set; }
        public bool Online { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public virtual User User { get; set; }
    }
}
