'use strict';

angular.module('moperServiceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('promociones', {
        url: '/promociones',
        template: '<promociones></promociones>'
      });
  });
