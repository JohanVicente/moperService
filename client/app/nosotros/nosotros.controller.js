'use strict';
(function(){

class NosotrosComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('moperServiceApp')
  .component('nosotros', {
    templateUrl: 'app/nosotros/nosotros.html',
    controller: NosotrosComponent
  });

})();
