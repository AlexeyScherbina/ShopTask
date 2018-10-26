using ShopTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShopTask.Controllers
{
    public class ProductController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        public JsonResult GetProducts()
        {
            List<Product> p = db.Products.ToList();
            return Json(p, JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult Buy(IEnumerable<BuyViewModel> buy)
        {
            if (buy != null)
            {
                foreach(BuyViewModel b in buy)
                {
                    var p = db.Products.Where(x => x.ProductID == b.ProductID).FirstOrDefault();
                    p.ProductNumber -= b.Quantity;
                    db.SaveChanges();
                }
                var res = true;
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var res = "Query is empty! Try Again";
                return Json(res, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public JsonResult AddProduct(Product product)
        {
            if (product != null)
            {
                db.Products.Add(product);
                db.SaveChanges();
                var res = true;
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var res = "Product Not Inserted! Try Again";
                return Json(res, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult DeleteProduct(Product product)
        {
            if (product != null)
            {
                db.Products.Remove(db.Products.Where(x => x.ProductID == product.ProductID).FirstOrDefault());
                db.SaveChanges();
                var res = true;
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var res = "Product Not Deleted! Try Again";
                return Json(res, JsonRequestBehavior.AllowGet);
            }
        }

        [HttpPost]
        public JsonResult UpdateProduct(Product product)
        {
            if (product != null)
            {
                Product p = db.Products.Where(x => x.ProductID == product.ProductID).FirstOrDefault();
                p.ProductName = product.ProductName;
                p.ProductNumber = product.ProductNumber;
                p.ProductPrice = product.ProductPrice;
                db.SaveChanges();
                var res = true;
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var res = "Product Not Deleted! Try Again";
                return Json(res, JsonRequestBehavior.AllowGet);
            }
        }
    }
}
