using System.Web;
using System.Web.Optimization;

namespace ShopTask
{
    public class BundleConfig
    {

        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/site.css")
                .Include("~/Content/bootstrap.min.css"));

            bundles.Add(new ScriptBundle("~/bundles/ShopApp")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/angular-route.min.js")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/ShopApp.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
