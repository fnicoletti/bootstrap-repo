/** @ngInject */
function routerConfig($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function (name) {
        return 'app/' + name + '/' + name + '.html';
    });
}
exports.routerConfig = routerConfig;
/** @ngInject */
var RouterController = (function () {
    function RouterController($router) {
        $router.config([
            { path: '/', component: 'main' }
        ]);
    }
    return RouterController;
})();
exports.RouterController = RouterController;
