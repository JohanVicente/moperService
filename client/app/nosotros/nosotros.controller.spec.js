'use strict';

describe('Component: NosotrosComponent', function () {

  // load the controller's module
  beforeEach(module('moperServiceApp'));

  var NosotrosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    NosotrosComponent = $componentController('NosotrosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
