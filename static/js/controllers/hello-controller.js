(function (ng) {
  'use strict';

  ng.module('app.controllers').controller('HelloController', [
    '$scope', '$http', '$q', '$location', 'ApiService',

    function ($scope, $http, $q, $location, ApiService) {
        $scope.promise = ApiService.Hello.get();
        $scope.promise.then(function(result) { // success
            $scope.msg = result.msg;
        }, function () { // failed
        });
    }
  ]);
})(angular);
