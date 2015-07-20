(function () {

    var app = angular.module('security');
    app.controller('Login', Login);

    function Login(oauth) {

        var model = this;
        model.username = "";
        model.password = "";

        model.login = function () {
            oauth.login(model.username, model.password)
                .then(function (result) {
                    console.log(result);
                })
                .catch(function () {
                    console.log(result);
                });
        };

        model.signOut = function () {
            //oauth.logout();
        };
    }
})();