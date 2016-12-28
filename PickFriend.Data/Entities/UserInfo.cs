using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PickFriend.Data.Entities
{
    public class UserInfo
    {
        [Key, ForeignKey("User")]
        public string UserId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string AboutMe { get; set; }

        public virtual User User { get; set; }
    }
}
