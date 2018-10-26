var ShopApp = angular.module('ShopApp', ['ngRoute']);

ShopApp.controller('LandingPageController', LandingPageController);
ShopApp.controller('LoginController', LoginController);
ShopApp.controller('RegisterController', RegisterController);
ShopApp.controller('ProductController', ProductController);
ShopApp.controller('HomeController', HomeController);
ShopApp.controller('CartController', CartController);

ShopApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
ShopApp.factory('LoginFactory', LoginFactory);
ShopApp.factory('RegistrationFactory', RegistrationFactory);
ShopApp.factory('ProductFactory', ProductFactory);
ShopApp.factory('CartFactory', CartFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'routes/MainPage',
            controller: HomeController
        })
        .when('/cart', {
            templateUrl: 'routes/Cart',
            controller: CartController
        })
        .when('/manage', {
            templateUrl: 'routes/SellerPage',
            controller: ProductController
        })
        .when('/login', {
            templateUrl: 'Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: 'Account/Register',
            controller: RegisterController
        })
        .otherwise({ redirectTo: '/home' });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
};

configFunction.$inject = ['$routeProvider', '$httpProvider'];

ShopApp.config(configFunction);