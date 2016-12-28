using Autofac;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using Owin;
using PickFriend.Web.Util;

namespace PickFriend.Web
{
    public partial class Startup
    {
        public void ConfigureSignalR(IAppBuilder app, IContainer container)
        {
            var jsonSettings = new JsonSerializerSettings();
            jsonSettings.ContractResolver = new SignalRContractResolver();
            var serializer = JsonSerializer.Create(jsonSettings);

            var resolver = new Autofac.Integration.SignalR.AutofacDependencyResolver(container);
            resolver.Register(typeof(JsonSerializer), () => serializer);

            app.MapSignalR(new HubConfiguration
            {
                Resolver = resolver
            });
        }
    }
}