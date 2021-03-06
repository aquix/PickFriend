﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PickFriend.Data.Entities
{
    public class LocationInfo
    {
        [Key, ForeignKey("User")]
        public string UserId { get; set; }
        public bool Online { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        public virtual User User { get; set; }
    }
}
