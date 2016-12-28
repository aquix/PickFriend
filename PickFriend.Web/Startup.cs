using System.Web.Http;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(PickFriend.Web.Startup))]

namespace PickFriend.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            var autofacContainer = ConfigureAutofac(app, config);

            ConfigureCors(app);
            ConfigureAuth(app);
            ConfigureWebApi(app, config);
            ConfigureSignalR(app, autofacContainer);
        }
    }
}
