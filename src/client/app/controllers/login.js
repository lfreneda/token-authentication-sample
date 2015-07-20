(function () {

    var app = angular.module('security');
    app.controller('Login', Login);

    function Login(oauth, $location, loginRedirect) {

        var model = this;
        model.username = "";
        model.password = "";

        model.login = function () {
            oauth.login(model.username, model.password)
                .then(function () {
                    loginRedirect.redirectPostLogin();
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