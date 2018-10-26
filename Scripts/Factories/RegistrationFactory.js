var RegistrationFactory = function ($http) {
    return function (emailAddress, password, confirmPassword) {


        return $http.post(
            '/Account/Register', {
                Email: emailAddress,
                Password: password,
                ConfirmPassword: confirmPassword
            }
        );
    }
}

RegistrationFactory.$inject = ['$http'];