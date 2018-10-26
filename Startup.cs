using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ShopTask.Startup))]
namespace ShopTask
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
