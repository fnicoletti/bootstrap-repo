export interface ICreditCardData {
  name: string;
  number: number;
  expMonth: number;
  expYear: number;
}

export class CreditCardService {
  // private ccData : ICreditCardData[];
  private ccData : ICreditCardData;

  constructor () {

    /*var rawData = [
      {
        'name' : 'Mario Rossi',
        'number' : 2310987623451233,
        'expMonth' : 11,
        'expYear' : 2016

      }
    ];*/

    this.ccData = {
      'name' : 'Mario Rossi',
      'number' : 2310987623451233,
      'expMonth' : 11,
      'expYear' : 2016

    };
  }

  public get dat(): ICreditCardData {
    return this.ccData;
  }

}
