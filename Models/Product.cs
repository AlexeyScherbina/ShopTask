using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShopTask.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public int ProductNumber { get; set; }
    }
}