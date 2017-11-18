'use strict';
(function(){

class ContactenosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('moperServiceApp')
  .component('contactenos', {
    templateUrl: 'app/contactenos/contactenos.html',
    controller: ContactenosComponent
  });

})();
