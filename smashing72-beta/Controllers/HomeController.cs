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
        public ActionResult Index()
        {
            using (var db = new SmashingModel())
            {
                var menu = db.Contents.Where(c => c.ShowInMenu).ToList();
                ViewBag.Menu = menu;
            }

            return View();
        }
    }
}