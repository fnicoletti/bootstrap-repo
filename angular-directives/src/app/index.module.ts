/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
// import { routerConfig, RouterController } from './index.route';
// custom route
import { routerConfigCustom, MyRouterController } from '../app/components/creditCard/creditCard.route';
// end custom route
import { runBlock } from './index.run';
import { AboutController } from './about/about.controller';
import { MainController } from './main/main.controller';
import { GithubContributor } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { acmeNavbar } from '../app/components/navbar/navbar.directive';


// custom service for get data
import { CreditCardService } from '../app/components/creditCard/creditCard.service';
// end custom service
// custom directives
import { creditCard } from '../app/components/creditCard/creditCard.directive';
import { creditCardSpaces } from '../app/components/creditCard/creditCardSpaces.directive';
// end custom directives

import { acmeMalarkey } from '../app/components/malarkey/malarkey.directive';

declare var malarkey: any;
declare var moment: moment.MomentStatic;

module angularDirectives {
  'use strict';

  angular.module('angularDirectives', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngNewRouter', 'toastr'])
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .config(config)
    // .config(routerConfig)
    .config(routerConfigCustom)
    .run(runBlock)
    .service('githubContributor', GithubContributor)
    .service('webDevTec', WebDevTecService)
    .service('CreditCardSer', CreditCardService)
    .controller('MyRouterController', MyRouterController)
    // .controller('RouterController', RouterController)
    .controller('MainController', MainController)
    .controller('AboutController', AboutController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('creditCard', creditCard)
    .directive('creditCardSpaces', creditCardSpaces)
    .directive('acmeMalarkey', acmeMalarkey);
}
