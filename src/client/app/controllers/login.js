(function () {

    var app = angular.module('security');
    app.controller('Login', Login);

    function Login(oauth, $location) {

        var model = this;
        model.username = "";
        model.password = "";

        model.login = function () {
            oauth.login(model.username, model.password)
                .then(function () {
                    console.log('login ok');
                    $location.path( "/" );
                })
                .catch(function (error) {
                    console.log('login error');
                });
        };

        model.signOut = function () {
            //oauth.logout();
        };
    }
})();