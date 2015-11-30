/** @ngInject
 *
 * Define the AboutController controller.
 *
 */
export class AboutController {

  private message : String;

  constructor($routeParams : any) {
    this.message = 'Hey ' + $routeParams.name;
    console.log('msg>>>' + this.message);
  }

}
