// "require" is similar to "controller" and allow to call a default controller, built-in
// "link" allow to call a function that will manipulate the DOM

/** @ngInject
 *
 * Directive creditCardSpaces, check if the number in creditCArd has spaces.
 *
 */
export function creditCardSpaces(): ng.IDirective {

  return {
    require: 'ngModel',
    link: spacesFunc
  };
}

// here the controller is ngModel since we have require into the directive
// when I use require I define the controller else I use the controller of the directive
// for more info, see the directive creditCard where we use "controller"

/**
 *
 * A validator for the number into the creditCard.
 *
 * @param scope {ng.IScope} - The scope into the function.
 * @param elm {JQuery} - The JQuery element.
 * @param attrs {ng.IAttributes} - The attributes for the JQuery element.
 * @param ctrl {any} - The controller.
 */

function spacesFunc(scope : ng.IScope, elm : JQuery, attrs : ng.IAttributes, ctrl : any) {

  var INTEGER_REGEXP = /^\-?\d+$/;

  ctrl.$validators.creditCardVal = function(modelValue : any, viewValue : any) {
    if (ctrl.$isEmpty(modelValue)) {
      // consider empty models to be valid
      return true;
    }

    if (INTEGER_REGEXP.test(viewValue)) {
      // it is valid
      return true;
    }

    // it is invalid
    return false;
  };
}
