'use strict';

describe('Component: ServicioComponent', function () {

  // load the controller's module
  beforeEach(module('moperServiceApp'));

  var ServicioComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ServicioComponent = $componentController('ServicioComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
