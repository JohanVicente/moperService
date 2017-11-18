'use strict';

angular.module('moperServiceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contactenos', {
        url: '/contactenos',
        template: '<contactenos></contactenos>'
      });
  });
