(function () {

    var app = angular.module('security');
    app.controller('Home', Home);

    function Home(oauth, $location) {

        var model = this;
        model.logOut = function () {
            oauth.logout();
            $location.path('/login');
        };
    }
})();