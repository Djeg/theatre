;(function (exports) {
  'use strict';

  /**
   * Launch the method with a binded callback.
   *
   * @memberof Theatre.utils
   *
   * @param {function} toLaunch
   * @param {object} scope
   * @param {string} toBind
   *
   * @return {*}
   */
  var launchAndBind = function (toLaunch, scope, method) {
    var args = [];

    if (arguments.length > 3) {
      for (var i = 2; i < arguments.lentgh; i++) {
        args.push(arguments[i]);
      }
    }

    return toLaunch(function binder () {
      return scope[method].apply(scope, args);
    });
  };

  exports.launchAndBind = launchAndBind;
})(window.Theatre.utils);
