
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
    this.userName = 'pipo';
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

// "restrict" significa che la direttiva può essere limitata ad A (attributi), E (elementi), C (classi)
// di default è A ed E
// "controller" permette di definire il controller da usare nella direttiva
// "controllerAs" è un'alias per richiamare i componenti del controller, nel nostro caso cc.months, cc.update...

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



