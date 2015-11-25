
import {CreditCardService, ICreditCardData} from './creditCard.service';


export class CreditCardController {

  public months: any;
  public years: any;
  public userName: String;
  public ccDatServ : CreditCardService;
  public ccDat : ICreditCardData;

  /* @ngInject */
  constructor(CreditCardSer : CreditCardService) {
    /*this.customer = {
      name: 'Pep',
      number: '1600'
    };*/
    this.userName = 'foo';
    this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.years = ['2015', '2016', '2017', '2018', '2019'];
    this.ccDatServ = CreditCardSer;
  }

  update() {
    console.log('user>>>' + this.userName);
  }

  getDat() {
    this.ccDat = this.ccDatServ.dat;
  }

}

// "restrict" means that directive can be limited to A (attributes), E (element), C (class)
// by default it has A and E
// "controller" allow to define the controller to use in the directive
// "controllerAs" is an alias to call the controller components (cc.months, cc.update)

/** @ngInject */
export function creditCard(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {},
    bindToController: {
      userName: '=',
      userNumber: '='
    },
    templateUrl: 'app/components/creditCard/creditCard.html',
    controller: CreditCardController,
    controllerAs: 'cc'
  };

}



