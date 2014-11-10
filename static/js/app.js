(function (ng, doc) {
  'use strict';

  var app = ng.module('app', ['ngRoute', 'ui.bootstrap', 'app.configs', 'app.controllers', 'app.services', 'app.directives', 'app.filters']);

  ng.module('app.configs', []);
  ng.module('app.controllers', []);
  ng.module('app.services', []);
  ng.module('app.directives', []);
  ng.module('app.filters', []);

})(angular, document);
