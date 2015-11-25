/** @ngInject */

// "require" simile all'attributo "controller" permette di richiamare un controller di default, built-in
// "link" peremette di richiamare una funzione che manipolerà il dom
export function creditCardSpaces(): ng.IDirective {

  return {
    require: 'ngModel',
    link: spacesFunc
  };
}

// qui il controller è ngModel perchè ho messo require nella direttiva
// quando uso require definisco il controller altrimenti si usa il controller
// della direttiva vedi la direttiva creditCard che usa l'opzione "controller"
function spacesFunc(scope : ng.IScope, elm : JQuery, attrs : ng.IAttributes, ctrl : any) {

  var INTEGER_REGEXP = /^\-?\d+$/;

  ctrl.$validators.creditCardVal = function(modelValue : any, viewValue : any) {
    if (ctrl.$isEmpty(modelValue)) {
      // consider empty models to be valid
      return true;
    }

    if (INTEGER_REGEXP.test(viewValue)) {
      // it is valid
      console.log('int>>>');
      return true;
    }

    console.log('invalid>>>');
    // it is invalid
    return false;
  };
}
