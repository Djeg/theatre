;(function (exports, pi) {
  'use strict';

  /**
   * A circle ready to be draw.
   *
   * @param {int} x
   * @param {int} y
   * @param {int} r the circle rayon
   *
   * @class
   * @memberof Theatre.graphics
   */
  var Circle = function (x, y, r) {
    this.x           = x;
    this.y           = y;
    this.r           = r;
    this.width       = r;
    this.height      = r;
    this.isFilled    = false;
    this.fillStyle   = 'black';
    this.strokeStyle = 'black';
  };

  /**
   * Display the circle on the screen.
   *
   * @method
   * @instance
   * @memberof! Theatre.graphics.Circle
   *
   * @param {Theatre.Screen} screen
   */
  Circle.prototype.display = function (screen) {
    screen.context.fillStyle   = this.fillStyle;
    screen.context.strokeStyle = this.strokeStyle;

    screen.context.beginPath();
    screen.context.arc(this.x, this.y, this.r, 0, 2 * pi, false);

    if (this.isFilled) {
      screen.context.fill();
    } else {
      screen.context.stroke();
    }
  };

  /**
   * Fill or not this circle.
   *
   * @method
   * @instance
   * @memberof! Theatre.graphics.Circle
   *
   * @param {boolean} filled
   *
   * @return {Theatre.graphics.Circle}
   */
  Circle.prototype.fill = function (filled) {
    this.isFilled = Boolean(filled);

    return this;
  };

  /**
   * Set the style of a filled circle
   *
   * @method
   * @instance
   * @memberof! Theatre.graphics.Circle
   *
   * @param {string} style
   *
   * @return {Theatre.graphics.Circle}
   */
  Circle.prototype.setFillStyle = function (style) {
    this.fillStyle = style;

    return this;
  };

  /**
   * Set the style of a stroked circle.
   *
   * @method
   * @instance
   * @memberof! Theatre.graphics.Circle
   *
   * @param {string} style
   *
   * @return {Theatre.graphics.Circle}
   */
  Circle.prototype.setStrokeStyle = function (style) {
    this.strokeStyle = style;

    return this;
  };

  exports.Circle = Circle;
})(window.Theatre.graphics, window.Math.PI);
