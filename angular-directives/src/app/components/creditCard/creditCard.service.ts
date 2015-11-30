/**
 * An interface of creditCard.
 */

export interface ICreditCardData {
  name: string;
  number: number;
  expMonth: number;
  expYear: number;
}

/**
 * Define a service for the creditCard directive.
 */

export class CreditCardService {
  public ccData : ICreditCardData;

  constructor () {

    this.ccData = {
      'name' : 'Mario Rossi',
      'number' : 2310987623451233,
      'expMonth' : 11,
      'expYear' : 2016

    };
  }

  /**
   *
   * Get the creditCard data.
   *
   * @param http {ng.IHttpService} - Get the http service by the controller.
   * @returns {ICreditCardData} - Return an interface ICreditCard defined here.
   */

  getDat(http : ng.IHttpService): ICreditCardData {

    let dat : ICreditCardData = <ICreditCardData>{};

    http.get('./data.json').then(
      function successCallback(response : any) {
      // this callback will be called asynchronously
      // when the response is available

        // dat = (<ICreditCardData> response.data);

        dat.name = (<ICreditCardData> response.data).name;
        dat.number = (<ICreditCardData> response.data).number;
        dat.expYear = (<ICreditCardData> response.data).expYear;
        dat.expMonth = (<ICreditCardData> response.data).expMonth;
        console.log('dat>>>' + dat.name);
        // console.log('response.data.name>>>' + response.data.name);

    }, function errorCallback(response : any) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log('error http');
    });

    return dat;
  }

}
