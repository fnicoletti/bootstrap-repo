
describe('creditCard route testing', () => {
  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;

  // the follow row is always necessary, angularDirectives is the name of the application
  beforeEach(angular.mock.module('angularDirectives'));

  // store references to $rootScope and $compile
  // so they are available to all tests in this describe block

  beforeEach(inject((_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService) => {
    // the injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;

  }));

  it('should not be undefined', () => {
    var b
    var browser : any;
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
      expect(url).toEqual('/main');
    });
  });

});
