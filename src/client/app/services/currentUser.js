(function () {

    var app = angular.module('security');
    app.factory('currentUser', currentUser);

    function currentUser() {

        var profile = {
            username: '',
            token: '',
            get loggedIn() {
                return this.token;
            }
        };

        var setProfile = function (username, token) {
            profile.username = username;
            profile.token = token;
        };

        return {
            profile: profile,
            setProfile: setProfile
        };


    }

})();