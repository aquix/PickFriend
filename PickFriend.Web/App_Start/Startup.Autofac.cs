using Owin;
using PickFriend.Web.Util;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;

namespace PickFriend.Web
{
    public partial class Startup
	{
		public IContainer ConfigureAutofac(IAppBuilder app, HttpConfiguration config)
        {
            var container = AutofacConfig.Configure(app);
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(config);

            return container;
        }
	}
}