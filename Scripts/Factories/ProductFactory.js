var ProductFactory = function ($http) {

    var factory = {};

    factory.GetProducts = function () {
        return $http.get('/Product/GetProducts');
    }

    factory.AddProduct = function (product) {
        return $http.post('/Product/AddProduct', product);
    }

    factory.DeleteProduct = function (product) {
        return $http.post('/Product/DeleteProduct', product);
    }

    factory.UpdateProduct = function (product) {
        return $http.post('/Product/UpdateProduct', product);
    }

    return factory;
}

ProductFactory.$inject = ['$http'];