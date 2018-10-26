var RegisterController = function ($scope, $window, $location, RegistrationFactory) {
    $scope.registerForm = {
        emailAddress: '',
        password: '',
        confirmPassword: ''
    };

    $scope.register = function () {
        RegistrationFactory($scope.registerForm.emailAddress, $scope.registerForm.password, $scope.registerForm.confirmPassword)
            .then(function successCallback(result) {
                if (result.data === "True") {
                    $location.path('/home');
                    $window.location.reload();
                } else {
                    alert("Error");
                }
            }, function errorCallback(data) {
                alert("Error");
            });
        
    }
}

RegisterController.$inject = ['$scope', '$window', '$location', 'RegistrationFactory'];