
import {CreditCardService, ICreditCardData} from './creditCard.service';


describe('service creditCard', () => {

  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;
  let creditCardServ : CreditCardService;

  beforeEach(angular.mock.module('angularDirectives'));

  it('should be registered', inject((CreditCardSer: CreditCardService) => {

    expect(CreditCardSer).not.toEqual(null);
  }));

  /*beforeEach(inject((creditCardServPar: CreditCardService) => {

    creditCardServ = creditCardServPar;
  }));

  it('should be not null', () => {
    expect(creditCardServ).not.toEqual(null);
  });*/

});
