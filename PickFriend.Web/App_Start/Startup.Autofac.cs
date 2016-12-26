using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;
using PickFriend.Web.Util;
using Autofac.Integration.Owin;
using System.Web.Http;

namespace PickFriend.Web
{
	public partial class Startup
	{
		public void ConfigureAutofac(IAppBuilder app)
        {
            var container = AutofacConfig.Configure(app);
            app.UseAutofacMiddleware(container);
            app.UseAutofacWebApi(GlobalConfiguration.Configuration);
        }
	}
}