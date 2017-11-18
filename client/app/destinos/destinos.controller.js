'use strict';
(function(){

class DestinosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('moperServiceApp')
  .component('destinos', {
    templateUrl: 'app/destinos/destinos.html',
    controller: DestinosComponent
  });

})();
