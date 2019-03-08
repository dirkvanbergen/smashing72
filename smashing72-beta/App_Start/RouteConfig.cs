using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace smashing72_beta
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Home",
                url: "{category}/{page}",
                defaults: new { controller = "Home", action = "Index", category = UrlParameter.Optional, page = UrlParameter.Optional }
            );
        }
    }
}
