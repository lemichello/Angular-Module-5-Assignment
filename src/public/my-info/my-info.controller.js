(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService'];

    function MyInfoController(SignUpService) {
        let ctrl = this;

        ctrl.userData = Object.assign(SignUpService.getUserData());

        if (angular.equals(ctrl.userData, {})) {
            ctrl.userData = undefined;
        }
    }
})();