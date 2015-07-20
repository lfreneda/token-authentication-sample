(function () {

    var app = angular.module('security');
    app.factory('currentUser', currentUser);

    function currentUser(localStorage) {

        var USERKEY = 'utoken';

        function getProfile() {

            var user = {
                username: '',
                token: '',
                get loggedIn() {
                    return this.token;
                }
            };

            var localUser = localStorage.get(USERKEY);
            if (localUser) {
                user.username = localUser.username;
                user.token = localUser.token;
            }

            return user;
        }

        var profile = getProfile();

        var setProfile = function (username, token) {
            profile.username = username;
            profile.token = token;
            localStorage.add(USERKEY, profile);
        };

        var clear = function() {
            profile.user = '';
            profile.token = '';
            localStorage.remove(USERKEY);
        };

        return {
            profile: profile,
            setProfile: setProfile,
            clear: clear
        };
    }

})();