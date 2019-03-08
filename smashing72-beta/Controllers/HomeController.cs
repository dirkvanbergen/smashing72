using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using smashing72_manager.Models;

namespace smashing72_beta.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string category = "", string page = "")
        {
            using (var db = new SmashingModel())
            {
                var menu = db.Contents.Where(c => c.ShowInMenu).ToList();
                ViewBag.Menu = menu;

                Content content = null;
                if (category == "") content = db.Contents.First(c => c.DataType == "HomePage");
                else if (page == "") content = db.Contents.First(c => c.UrlSegment == category && c.ParentContentId.HasValue == false);
                else content = db.Contents.First(c => c.UrlSegment == page && c.Parent != null && c.Parent.UrlSegment == category);

                ViewBag.Content = content;
                ViewBag.Html = content.HtmlData?.Html;
            }
            return View();
        }
    }
}