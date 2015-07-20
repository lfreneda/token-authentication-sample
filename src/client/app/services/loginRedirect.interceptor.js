(function () {

    var app = angular.module('security');
    app.factory('loginRedirect', loginRedirect);

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push('loginRedirect');
    });

    function loginRedirect($q, $location) {

        var lastPath = '/';

        var responseError = function (response) {
            if (response.status == 401) {
                lastPath = $location.path();
                $location.path('/login');
            }
            return $q.reject(response);
        };

        var redirectPostLogin = function() {
            $location.path(lastPath);
            lastPath = '/';
        };

        return {
            responseError: responseError,
            redirectPostLogin: redirectPostLogin
        };
    }

})();