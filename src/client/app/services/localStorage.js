(function () {

    var app = angular.module('security');
    app.factory('localStorage', localStorage);

    function localStorage($window) {

        var store = $window.localStorage;

        var add = function (k, v) {
            value = angular.toJson(v);
            store.setItem(k, value);
        };

        var get = function (key) {
            var value = store.getItem(key);
            if (value) {
                value = angular.fromJson(value);
            }
            return value;
        };

        var remove = function(key) {
            store.removeItem(key);
        };

        return {
            add: add,
            get: get,
            remove: remove
        };
    }
})();