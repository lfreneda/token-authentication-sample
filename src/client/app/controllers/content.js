(function () {

    var app = angular.module('security');
    app.controller('Content', Content);

    var contentUrl = 'http://localhost:45342/auth/authenticated-content';

    function Content($http, $location) {

        var model = this;
        model.content = '';

        $http.get(contentUrl)
            .then(function (response) {
                model.content = response.data.message;
                console.log(response.data.message);
            })
            .catch(function () {
                console.log('could not authenticate');
            });
    }

})();