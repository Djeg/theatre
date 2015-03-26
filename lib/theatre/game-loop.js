;(function (exports, requestAnimation) {
  'use strict';

  /**
   * A simple game loop.
   *
   * @param {int} fps
   *
   * @class GameLoop
   * @memberof Theatre
   */
  var GameLoop = function (fps) {
    this.fpms     = 1000/fps;
    this.callback = null;
    this.tick     = null;
  };

  /** @lends Theatre.GameLoop */

  /**
   * Loop the given callback.
   * @method
   * @instance
   * @memberof! Theatre.GameLoop
   *
   * @param {function} callback
   *
   */
  GameLoop.prototype.loop = function (callback) {
    if (null !== this.callback) {
      throw new Error('Youps ... this game loop is already looping on someting :/');
    }

    this.callback = callback;
    this.tick     = new Date().getTime();

    exports.utils.launchAndBind(requestAnimation, this, 'animate', this.fpms);
  };

  /**
   * Stop the game loop
   * @method
   * @instance
   * @memberof! Theatre.GameLoop
   */
  GameLoop.prototype.stop = function () {
    this.callback = null;
    this.tick     = null;
  };

  /**
   * This method is launched on each frame and launch the looping callback.
   * @method
   * @instance
   * @memberof! Theatre.GameLoop
   */
  GameLoop.prototype.animate = function () {
    if (null === this.callback) {
      return;
    }

    this.callback();

    exports.utils.launchAndBind(requestAnimation, this, 'waitForFrame', this.fpms);
  };

  /**
   * Wait for one frame
   * @method
   * @instance
   * @memberof! Theatre.GameLoop
   */
  GameLoop.prototype.waitForFrame = function () {
    var now = new Date().getTime();

    if ((now - this.tick) > this.fpms) {
      this.tick = now;

      exports.utils.launchAndBind(requestAnimation, this, 'animate', this.fpms);

      return;
    }

    exports.utils.launchAndBind(requestAnimation, this, 'waitForFrame', this.fpms);
  };

  exports.GameLoop = GameLoop;
})(window.Theatre, (function () {
  'use strict';

  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function requestAnimationFallback (callback, fpms) {
      window.setTimeout(callback, fpms);
    }
  ;
})());
