using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;
using PickFriend.Web.Util;

[assembly: OwinStartup(typeof(PickFriend.Web.Startup))]

namespace PickFriend.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            ConfigureAutofac(app);

            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();
        }
    }
}
