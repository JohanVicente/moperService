'use strict';

describe('Component: PromocionesComponent', function () {

  // load the controller's module
  beforeEach(module('moperServiceApp'));

  var PromocionesComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PromocionesComponent = $componentController('PromocionesComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
