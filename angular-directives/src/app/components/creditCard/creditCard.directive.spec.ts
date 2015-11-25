// in typescript posso scrivere anche codice javascript. typescript estende javascript
// var porta le variabili ad essere tutte globali non hanno uno scope
// let permette di definire le variabili con scope
// const definisco delle costanti
// let e const sono comunque keywords javascript

// invece di () => posso anche scrivere function()
// () => è una forma contratta che permette solo typescript
describe('Unit testing', () => {
  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;
  let element: ng.IAugmentedJQuery;
  let scope: any;

  // questa riga deve esserci sempre
  // angularDirectives è il nome dell'applicazione
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
    // expect(cc.userName).toBeFalsy();

    var input = angular.element(element.find('input')[2]);
    input.val(value);
    $rootScope.$digest();

    console.log(scope.cc);
    expect(scope.cc.userName).toEqual(value);
  });

});
