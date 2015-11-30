import {CreditCardController } from './creditCard.directive';
import {CreditCardService, ICreditCardData} from './creditCard.service';


describe('service creditCard', () => {

  let creditCardServ : CreditCardService;
  let element: ng.IAugmentedJQuery;
  let ccController: CreditCardController;
  let httpbackend : ng.IHttpBackendService;
  let http : ng.IHttpService;

  beforeEach(angular.mock.module('angularDirectives'));

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService,
                     CreditCardSer: CreditCardService, _$httpBackend_ : ng.IHttpBackendService,
                     _$http_ : ng.IHttpService) => {
    // the injector unwraps the underscores (_) from around the parameter names when matching
    element = angular.element('<credit-card></credit-card>');

    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    ccController = (<any> element.isolateScope()).cc;

    creditCardServ = CreditCardSer;

    httpbackend = _$httpBackend_;
    http = _$http_;

  }));

  it('should be not null', () => {
    expect(creditCardServ).not.toEqual(null);
  });

  /*it('should initialize some data', () => {

    ccController.ccDatServ = creditCardServ;
    ccController.getDat();

    expect(creditCardServ.ccData.name).toEqual(ccController.ccDat.name);
  });*/

  it('should work $http', () => {

    let resp : ICreditCardData = <ICreditCardData>{};

    http.get('http://localhost:3000/data.json')
      .success(function(data : any) {
        resp = (<ICreditCardData> data);
      })
      .error(function(data : any) {
        console.log('errorHttp>>>')
    });

    httpbackend
      .when('GET', 'http://localhost:3000/data.json')
      .respond(200, {
        'name': 'Mario Rossi',
        'number': 2310987623451233,
        'expMonth': 11,
        'expYear': 2016
    });

      httpbackend.flush();

    expect(resp).toEqual({
      'name': 'Mario Rossi',
      'number': 2310987623451233,
      'expMonth': 11,
      'expYear': 2016
    });
  })
});
