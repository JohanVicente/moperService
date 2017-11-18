'use strict';
(function(){

class ServicioComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('moperServiceApp')
  .component('servicio', {
    templateUrl: 'app/servicio/servicio.html',
    controller: ServicioComponent
  });

})();
