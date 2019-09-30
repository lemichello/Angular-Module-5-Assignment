(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpFormController', SignUpFormController);

    SignUpFormController.$inject = ['SignUpService', 'MenuService'];

    function SignUpFormController(SignUpService, MenuService) {
        let ctrl = this;

        ctrl.user = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            favDish: ""
        };
        ctrl.isSignedUp = false;
        ctrl.isCorrectDish = true;

        ctrl.submit = function () {
            MenuService.getMenuItemsByShortName(ctrl.user.favDish)
                .then(function (result) {
                    ctrl.user.favDish = result;

                    SignUpService.setUserData(ctrl.user);

                    ctrl.user.favDish = ctrl.user.favDish.short_name;

                    ctrl.isCorrectDish = true;
                    ctrl.isSignedUp = true;
                })
                .catch(function () {
                    ctrl.isCorrectDish = false;
                    ctrl.isSignedUp = false;
                });
        };
    }
})();