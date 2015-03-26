;(function (exports, doc) {
  'use strict';

  /**
   * This is the screen of the game.
   *
   * @param {string} canvasId
   * @param {int} resolutionX
   * @param {int} resolutionY
   *
   * @class Screen
   * @memberof Theatre
   */
  var Screen = function (canvasId, resolutionX, resolutionY) {
    this.canvas      = doc.getElementById(canvasId);
    this.context     = this.canvas.getContext('2d');
    this.resolutionX = resolutionX;
    this.resolutionY = resolutionY;

    // setup the resolution
    this.canvas.setAttribute('width', this.resolutionX + 'px');
    this.canvas.setAttribute('height', this.resolutionY + 'px');
  };

  /**
   * Draw on element. An element must be an object with the following method:
   * `display`. This method will takes the screen.
   * @method
   * @instance
   * @memberof! Theatre.Screen
   *
   * @param {object} element
   *
   * @return {Theatre.Screen}
   */
  Screen.prototype.draw = function (element) {
    if (undefined === element.display) {
      return this;
    }

    element.display(this);

    return this;
  };

  /**
   * Clean the screen.
   * @method
   * @instance
   * @memberof! Theatre.Screen
   *
   * @return {Theatre.Scene}
   */
  Screen.prototype.clean = function () {
    this.context.clearRect(0, 0, this.resolutionX, this.resolutionY);

    return this;
  };

  exports.Screen = Screen;
})(window.Theatre, window.document);
