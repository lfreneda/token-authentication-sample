(function () {

    var app = angular.module('security');

    app.factory('addToken', addToken);

    app.config(function($httpProvider) {
        $httpProvider.interceptors.push('addToken');
    });

    function addToken(currentUser, $q) {

        var request = function (config) {
            if (currentUser.profile.loggedIn) {
                config.headers.Authorization = 'Token ' + currentUser.profile.token;
            }

            return $q.when(config);
        };

        return {
            request: request
        }
    }
})();