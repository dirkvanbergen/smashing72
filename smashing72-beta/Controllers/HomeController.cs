using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using smashing72_beta.Models;
using smashing72_beta.ViewModels;

namespace smashing72_beta.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string category = "", string page = "")
        {
            List<Page> allPages;
            using (var db = new SmashingModel())
            {
                allPages = db.Pages.ToList();
            }

            var menu = allPages.Where(c => c.ShowInMenu).ToList();
            ViewBag.Menu = menu;

            Page content = null;
            if (category == "") content = allPages.First(c => c.DataType == "HomePage");
            else if (page == "") content = allPages.First(c => c.UrlSegment == category && c.ParentContentId.HasValue == false);
            else content = allPages.First(c => c.UrlSegment == page && c.ParentContentId.HasValue && allPages.First(p => p.Id == c.ParentContentId).UrlSegment == category);

            ViewBag.PageData = LoadPageData(content);

            ViewBag.Content = content;
            return View();
        }

        private dynamic LoadPageData(Page page)
        {
            switch (page.DataType)
            {
                case "HomePage":
                    return LoadHomePageData();
            }

            return null;
        }

        private dynamic LoadHomePageData()
        {
            dynamic result = new System.Dynamic.ExpandoObject();
            using (var db = new SmashingModel())
            {
                var news = db.News.OrderByDescending(n => n.PublishDate).Take(5).AsEnumerable().Select(NewsViewModel.FromNews).ToList();
                result.News = news;
            }

            return result;
        }
    }
}