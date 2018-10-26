var CartFactory = function ($http) {

    var factory = {};

    factory.products = [];

    factory.AddToCart = function (product) {
        var b = true;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].ProductID === product.ProductID) {
                if (this.products[i].count < this.products[i].ProductNumber) {
                    this.products[i].count += 1;
                }
                b = false;
            }
        }
        if (b === true) {
            product.count = 1;
            this.products.push(product);
        }
    }

    factory.RemoveFromCart = function (product) {
        this.products.splice(this.products.indexOf(product), 1);
    }

    factory.ClearCart = function () {
        this.products = [];
    }

    factory.Buy = function () {
        if (this.products.length > 0) {
            var list = [];
            for (var i = 0; i < this.products.length; i++) {
                list.push({
                    ProductID: this.products[i].ProductID,
                    Quantity: this.products[i].count
                });
            }
            return $http.post('/Product/Buy', list);
        }
        
    }

    factory.GetTotal = function () {
        var sum = 0;
        for (var i = 0; i < this.products.length; i++) {
            sum += this.products[i].ProductPrice * this.products[i].count;
        }
        return sum;
    }

    factory.Ready = function () {
        if (this.products.length === 0) {
            return false;
        }
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].count > this.products[i].ProductNumber || this.products[i].count === undefined) {
                return false;
            }
        }
        return true;
    }

    return factory;
}

CartFactory.$inject = ['$http'];