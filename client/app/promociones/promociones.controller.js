'use strict';
(function(){

class PromocionesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('moperServiceApp')
  .component('promociones', {
    templateUrl: 'app/promociones/promociones.html',
    controller: PromocionesComponent
  });

})();
