(function() {

    var app = angular.module('security');
    app.controller('Login', Login);

    function Login() {

        var model = this;
        model.username = "";
        model.password = "";

        model.login = function(form) {
            //if (form.$valid) {
            //    oauth.login(model.username, model.password)
            //        .then(loginRedirect.redirectPreLogin)
            //        .catch(alerting.errorHandler("Could not login"));
            //    model.password = "";
            //}
        };

        model.signOut = function() {
            //oauth.logout();
        };
    }
})();