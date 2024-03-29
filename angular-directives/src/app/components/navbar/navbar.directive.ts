/** @ngInject */
export function acmeNavbar(): ng.IDirective {

  return {
    restrict: 'E',
    scope: {
      creationDate: '='
    },
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'vm'
  };

}

/** @ngInject */
export class NavbarController {
  public relativeDate: string;
  public creationDate: number;

  constructor(moment: moment.MomentStatic) {
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
