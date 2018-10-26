var LoginFactory = function ($http) {
    return function (emailAddress, password) {

        return $http.post(
            '/Account/Login', {
                Email: emailAddress,
                Password: password
            }
        );
    }
}

LoginFactory.$inject = ['$http'];