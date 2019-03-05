using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace smashing72_beta.Controllers
{
    public class ErrorController : Controller
    {
        // GET: Error
        public ActionResult Index(int code = 0)
        {
            return View();
        }
    }
}