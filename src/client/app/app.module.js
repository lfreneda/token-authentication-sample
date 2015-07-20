(function() {

    var app = angular.module('security', ['ngRoute', 'ngAnimate']);

    var routes = [
        {
            url: "/",
            settings: { templateUrl: "templates/home.html" }
        },
        {
            url: "/authenticated-content",
            settings: { templateUrl: "templates/authenticated-content.html"}
        },
        {
            url: "/login",
            settings: { templateUrl: "templates/login.html" }
        }
    ];

    var registerRoutes = function($routeProvider) {
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    };

    app.config(registerRoutes);

})();