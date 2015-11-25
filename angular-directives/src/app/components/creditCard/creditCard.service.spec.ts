import { CreditCardController } from './creditCard.directive';
import {CreditCardService, ICreditCardData} from './creditCard.service';


describe('service creditCard', () => {

  let creditCardServ : CreditCardService;
  let element: ng.IAugmentedJQuery;
  let ccController: CreditCardController;

  beforeEach(angular.mock.module('angularDirectives'));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService, CreditCardSer: CreditCardService) => {
    // the injector unwraps the underscores (_) from around the parameter names when matching
    element = angular.element('<credit-card></credit-card>');

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    ccController = (<any> element.isolateScope()).cc;

    creditCardServ = CreditCardSer;

  }));

  it('should be not null', () => {
    expect(creditCardServ).not.toEqual(null);
  });

  it('should have a fuction to get data', () => {

    ccController.ccDatServ = creditCardServ;
    ccController.getDat();

    console.log("name>>>" + ccController.ccDat.name);

    expect(creditCardServ.ccData.name).toEqual(ccController.ccDat.name);
  });



});
