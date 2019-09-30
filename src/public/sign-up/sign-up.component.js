(function () {
    "use strict";

    angular.module('public')
        .component('signUpForm', {
            templateUrl: 'src/public/sign-up/signUpForm.html',
            controller: 'SignUpFormController',
            controllerAs: 'ctrl'
        });
})();