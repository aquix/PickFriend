﻿using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security.DataProtection;
using PickFriend.Data.Context;
using PickFriend.Data.Entities;

namespace PickFriend.Web.Areas.Auth.Managers
{
    public class AppUserManager : UserManager<User>
    {
        public AppUserManager(IUserStore<User> store)
            : base(store) { }

        public static AppUserManager Create(IDataProtector dataProtector, AppDbContext context)
        {
            var manager = new AppUserManager(new UserStore<User>(context));
            // Configure validation logic for usernames
            manager.UserValidator = new UserValidator<User>(manager)
            {
                AllowOnlyAlphanumericUserNames = false,
                RequireUniqueEmail = false
            };
            // Configure validation logic for passwords
            manager.PasswordValidator = new PasswordValidator
            {
                RequiredLength = 5,
                RequireDigit = true
            };

            manager.UserTokenProvider = new DataProtectorTokenProvider<User>(dataProtector);

            return manager;
        }
    }
}