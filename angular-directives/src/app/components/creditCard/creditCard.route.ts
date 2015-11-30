/** @ngInject */
export function routerConfigCustom($componentLoaderProvider: any) {
  $componentLoaderProvider.setTemplateMapping(function(name: String) {
    return 'app/' + name + '/' + name + '.html';
  });
}

/** @ngInject */
export class MyRouterController {

  public nameAbout : string;

  constructor($router: any) {
    $router.config([
      { path: '/about/:name', component: 'about' },
      { path: '/', component: 'main' }
    ]);
    this.nameAbout = 'test1';
  }
}
