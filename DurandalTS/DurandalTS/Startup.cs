using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DurandalTS.Startup))]
namespace DurandalTS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
