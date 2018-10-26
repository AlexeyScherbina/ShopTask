var ProductController = function ($scope, ProductFactory) {
    $scope.products = [];
    $scope.newProduct = {
        ProductName: '',
        ProductPrice: 0,
        ProductNumber: 0
    }

    $scope.GetProducts = function () {
        ProductFactory.GetProducts().then(function successCallback(result) {
            $scope.products = result.data;   
        }, function errorCallback(data) {
            console.log('loading data failed');
        })
    }
    $scope.AddProduct = function (product) {
        ProductFactory.AddProduct(product).then(function successCallback(result) {
            if (result.data === true) {
                $scope.GetProducts();
                $scope.newProduct = {
                    ProductName: '',
                    ProductPrice: 0,
                    ProductNumber: 0
                }
            }
        }, function errorCallback(data) {
            console.log('adding data failed');
        });
    }

    $scope.UpdateProduct = function (product) {
        ProductFactory.UpdateProduct(product).then(function successCallback(result) {

        }, function errorCallback(data) {
            console.log('updating data failed');
        })
    }

    $scope.DeleteProduct = function (product) {
        ProductFactory.DeleteProduct(product).then(function successCallback(result) {
            $scope.products.splice($scope.products.indexOf(product),1);
        }, function errorCallback(data) {
            console.log('deleting data failed');
        })
    }


    $scope.GetProducts();

}

ProductController.$inject = ['$scope', 'ProductFactory'];