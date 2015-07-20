//
(function () {

    var app = angular.module('security');
    app.factory('oauth', oauth);

    var loginUrl = 'http://localhost:45342/auth';

    function oauth($http) {
        return {
            login: login
        };

        function formEncode(data) {

            var pairs = [];
            for (var name in data) {
                pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
            }
            return pairs.join('&').replace(/%20/g, '+');
        }

        function login(username, password) {

            var data = formEncode({
                username: username,
                password: password,
                grant_type: 'password'
            });

            var options = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            return $http.post(loginUrl, data, options)
        }
    }
})();