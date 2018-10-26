var HomeController = function ($scope, ProductFactory, CartFactory) {
    $scope.products = [];
    
    $scope.GetProducts = function () {
        ProductFactory.GetProducts().then(function successCallback(result) {
            $scope.products = result.data;
        }, function errorCallback(data) {
            console.log('loading data failed');
        })
    }

    $scope.AddToCart = function (product) {
        CartFactory.AddToCart(product);
    }

    $scope.GetProducts();

}

HomeController.$inject = ['$scope', 'ProductFactory', 'CartFactory'];