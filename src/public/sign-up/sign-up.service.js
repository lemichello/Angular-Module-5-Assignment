(function () {
    "use strict";

    angular.module('public')
        .service('SignUpService', SignUpService);

    function SignUpService() {
        let service = this;

        service.userData = {};

        service.setUserData = function (data) {
            Object.assign(service.userData, data);
        };

        service.getUserData = function () {
            return service.userData;
        };
    }
})();