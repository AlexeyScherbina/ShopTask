using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopTask.Controllers
{
    public class RoutesController : Controller
    {
        public ActionResult MainPage()
        {
            return View();
        }

        public ActionResult Cart()
        {
            return View();
        }

        [Authorize(Roles = "Seller")]
        public ActionResult SellerPage()
        {
            return View();
        }
    }
}