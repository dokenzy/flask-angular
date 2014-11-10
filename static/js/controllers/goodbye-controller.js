(function (ng) {
  'use strict';

  ng.module('app.controllers').controller('GoodbyeController', [
    '$scope', '$http', '$q', '$location', 'ApiService',

    function ($scope, $http, $q, $location, ApiService) {
      $scope.submit = function (value) {
        var myMsg = {
          msg: value
        };
        $scope.promise = ApiService.Goodbye.post(myMsg);
        $scope.promise.then(function(result) { // success
          $scope.msg = result.msg;
        }, function () { // failed
        });
      };
    }
  ]);
})(angular);
