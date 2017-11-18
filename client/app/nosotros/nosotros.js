'use strict';

angular.module('moperServiceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('nosotros', {
        url: '/nosotros',
        template: '<nosotros></nosotros>'
      });
  });
