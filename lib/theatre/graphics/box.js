;(function (exports) {
  'use strict';

  /**
   * A simple box to display.
   *
   * @param {int} x
   * @param {int} y
   * @param {int} width
   * @param {int} height
   *
   * @class
   * @memberof Theatre.graphics
   */
  var Box = function (x, y, width, height) {
    this.x           = x;
    this.y           = y;
    this.width       = width;
    this.height      = height;
    this.filled      = false;
    this.fillStyle   = 'black';
    this.strokeStyle = 'black';
  };

  /**
   * Display the box on the screen.
   * @method
   * @instance
   * @memberof! Theatre.graphics.Box
   *
   * @param {Theatre.Screen} screen
   */
  Box.prototype.display = function (screen) {
    screen.context.fillStyle   = this.fillStyle;
    screen.context.strokeStyle = this.strokeStyle;

    if (true === this.filled) {
      screen.context.fillRect(this.x, this.y, this.width, this.height);
    } else {
      screen.context.strokeRect(this.x, this.y, this.width, this.height);
    }
  };

  /**
   * filled or not this box
   * @method
   * @instance
   * @memberof! Theatre.graphics.Box
   *
   * @param {boolean} filled
   *
   * @return {Theatre.graphics.Box}
   */
  Box.prototype.fill = function (filled) {
    this.filled = Boolean(filled);

    return this;
  };

  /**
   * Set the fill style.
   * @method
   * @instance
   * @memberof! Theatre.graphics.Box
   *
   * @param {string} style
   *
   * @return {Theatre.graphics.Box}
   */
  Box.prototype.setFillStyle = function (style) {
    this.fillStyle = style;

    return this;
  };

  /**
   * Set the stroke style.
   * @method
   * @instance
   * @memberof! Theatre.graphics.Box
   *
   * @param {string} style
   *
   * @return {Theatre.graphics.Box}
   */
  Box.prototype.setStrokeStyle = function (style) {
    this.strokeStyle = style;

    return this;
  };

  exports.Box = Box;
})(window.Theatre.graphics);
