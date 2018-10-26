var CartController = function ($scope, CartFactory) {
    $scope.GetProducts = function () {
        return CartFactory.products;
    }
    $scope.GetTotal = function () {
        return CartFactory.GetTotal();
    }
    $scope.Remove = function (product) {
        CartFactory.RemoveFromCart(product);
    }
    $scope.Ready = function () {
        return CartFactory.Ready();
    }
    $scope.Buy = function () {
        CartFactory.Buy().then(function successCallback(result) {
            if (result.data === true) {
                CartFactory.ClearCart();
            }
            else {
                console.log('operation failed');
            }
        }, function errorCallback(data) {
            console.log('operation failed');
        });
    }
    
}

CartController.$inject = ['$scope', 'CartFactory'];