var LoginController = function ($scope, $window, $location, LoginFactory) {
    $scope.loginForm = {
        emailAddress: '',
        password: ''
    };

    $scope.login = function () {
        LoginFactory($scope.loginForm.emailAddress, $scope.loginForm.password)
            .then(function successCallback(result) {
                if (result.data === "True") {
                    $location.path('/home');
                    $window.location.reload();
                } else {
                    alert("Error");
                }
            }, function errorCallback(result) {
                alert("Error");
            });
    }
}

LoginController.$inject = ['$scope', '$window', '$location', 'LoginFactory'];