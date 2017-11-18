'use strict';

angular.module('moperServiceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('destinos', {
        url: '/destinos',
        template: '<destinos></destinos>'
      });
  });
