using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using PickFriend.Data.Entities;

namespace PickFriend.Data.Context
{
    public class AppDbContext : IdentityDbContext<User>
    {
        public AppDbContext()
            : base("DefaultConnection", throwIfV1Schema: false) { }

        public static AppDbContext Create() => new AppDbContext();

        public DbSet<UserInfo> UserInfoes { get; set; }

        public DbSet<LocationInfo> LocationInfoes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasRequired(u => u.UserInfo)
                .WithRequiredPrincipal(ui => ui.User);
        }
    }
}
