'use strict';

angular.module('moperServiceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('servicio', {
        url: '/servicio',
        template: '<servicio></servicio>'
      });
  });
