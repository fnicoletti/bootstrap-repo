import { WebDevTecService, ITecThing } from '../components/webDevTec/webDevTec.service';

export class MainController {
  public awesomeThings: ITecThing[];
  public webDevTec: WebDevTecService;
  public classAnimation: string;
  public creationDate: number;
  public toastr: any;

  /* @ngInject */
  constructor ($timeout: ng.ITimeoutService, webDevTec: WebDevTecService, toastr: any) {
    this.awesomeThings = new Array();
    this.webDevTec = webDevTec;
    this.classAnimation = '';
    this.creationDate = 1447156111046;
    this.toastr = toastr;
    this.activate($timeout);
  }

  /** @ngInject */
  activate($timeout: ng.ITimeoutService) {
    this.getWebDevTec();

    var self = this;

    $timeout(function() {
      self.classAnimation = 'rubberBand';
    }, 4000);
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }

  getWebDevTec() {
    this.awesomeThings = this.webDevTec.tec;
  }
}
