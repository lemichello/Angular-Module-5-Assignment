(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://damp-ravine-13573.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
