// in typescript we can write javascript, typescript extend javascript
// var do the variables global without a scope
// let allow a variable to have a scope
// const is used for the constants
// let e const are javascript keywords

// we can write () => instead of function()
// () => is a contraction allowed only in typescript

describe('Unit testing', () => {
  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;
  let element: ng.IAugmentedJQuery;
  let scope: any;

  // the follow row is always necessary, angularDirectives is the name of the application
  beforeEach(angular.mock.module('angularDirectives'));

  // store references to $rootScope and $compile
  // so they are available to all tests in this describe block

  beforeEach(inject((_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService) => {
    // the injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    element = angular.element('<credit-card></credit-card>');
    $compile(element)($rootScope);
    $rootScope.$digest();
    scope = (<any> element.isolateScope());
  }));

  it('should not be undefined', () => {
    expect(element).toBeDefined();
    expect(element.html()).not.toEqual(null);
  });

  it('should have 12 months', () => {
    let no = angular.element(element.find('select')[0]).find('option').length;
    expect(no).toEqual(12);
  });

  it('should have 5 years', () => {
    let no = angular.element(element.find('select')[1]).find('option').length;
    expect(no).toEqual(5);
  });

  it('should change the input text when model changes', () => {
    const value = 'Giuseppe Trigiante';

    var input = angular.element(element.find('input')[2]);
    input.val(value);
    $rootScope.$digest();

    console.log(scope.cc);
    expect(scope.cc.userName).toEqual(value);
  });

});
