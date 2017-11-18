'use strict';

describe('Component: ContactenosComponent', function () {

  // load the controller's module
  beforeEach(module('moperServiceApp'));

  var ContactenosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ContactenosComponent = $componentController('ContactenosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
