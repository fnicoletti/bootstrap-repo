
import {CreditCardService, ICreditCardData} from './creditCard.service';


describe('service creditCard', () => {

  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;

  beforeEach(angular.mock.module('angularDirectives'));

  it('should be registered', inject((CreditCardSer: CreditCardService) => {

    expect(CreditCardSer).not.toEqual(null);
  }));


});
