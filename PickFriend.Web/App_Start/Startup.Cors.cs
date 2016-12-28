using Microsoft.Owin.Cors;
using Owin;

namespace PickFriend.Web
{
    public partial class Startup
	{
		public void ConfigureCors(IAppBuilder app)
        {
            // TODO only for 'clientUrl'
            app.UseCors(CorsOptions.AllowAll);
        }
	}
}