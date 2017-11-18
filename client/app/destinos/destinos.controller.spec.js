'use strict';

describe('Component: DestinosComponent', function () {

  // load the controller's module
  beforeEach(module('moperServiceApp'));

  var DestinosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DestinosComponent = $componentController('DestinosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
