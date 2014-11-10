(function (ng) {

  'use strict';

  ng.module('app.services').service('ApiService', [
    '$q',
    '$http',

    function ($q, $http) {
      this.Hello = {
        get: function () {
          var d = $q.defer();
          $http.get('/api/hello')
          .success(function (data) {d.resolve(data); })
          .error(function (data, status) { d.reject([data, status]); });
          return d.promise;
        }
      };
      this.Goodbye = {
        post: function (msg) {
          var d = $q.defer();
          $http.post('/api/goodbye', msg)
          .success(function (data) {d.resolve(data); })
          .error(function (data, status) { d.reject([data, status]); });
          return d.promise;
        }
      };
    }
  ]);

})(angular);
