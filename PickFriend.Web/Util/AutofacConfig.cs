using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Core;
using Autofac.Integration.WebApi;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler;
using Microsoft.Owin.Security.DataHandler.Serializer;
using Microsoft.Owin.Security.DataProtection;
using Owin;
using PickFriend.Data.Context;
using PickFriend.Data.Entities;
using PickFriend.Web.Areas.Auth.Managers;

namespace PickFriend.Web.Util
{
    public class AutofacConfig
    {
        public static IContainer Configure(IAppBuilder app)
        {
            var builder = new ContainerBuilder();

            RegisterTypes(builder, app);

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            builder.RegisterWebApiFilterProvider(GlobalConfiguration.Configuration);

            IContainer container = builder.Build();
            GlobalConfiguration.Configuration.DependencyResolver =
                new AutofacWebApiDependencyResolver(container);
            return container;
        }

        private static void RegisterTypes(ContainerBuilder builder, IAppBuilder app)
        {
            // Identity specific
            builder.RegisterType<TicketDataFo‌​rmat>()
                .As<ISecureDataFormat<AuthenticationTicket>>();
            builder.RegisterType<TicketSerializer>()
                .As<IDataSerializer<AuthenticationTicket>>();
            builder.Register(c => app.GetDataProtectionProvider().Create("ASP.NET Identity"))
                .As<IDataProtector>();
            builder.Register(c => HttpContext.Current.GetOwinContext().Authentication);

            builder.RegisterType<AppDbContext>()
               .AsSelf();
            builder.RegisterType<UserStore<User>>()
                .As<IUserStore<User>>();
            builder.Register(c => AppUserManager.Create(c.Resolve<IDataProtector>(), c.Resolve<AppDbContext>()));
        }
    }
}