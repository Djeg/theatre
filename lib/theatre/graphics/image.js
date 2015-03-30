;(function (exports) {
  'use strict';

  /**
   * An image ready to be drawed in your game.
   *
   * @param {Image} image
   * @param {int} x
   * @param {int} y
   *
   * @class
   * @memberof Theatre.graphics
   */
  var Image = function (image, x, y) {
    this.image   = image;
    this.x       = x;
    this.y       = y;
    this.width   = this.image.naturalWidth();
    this.height  = this.image.naturalHeight();
    this.clipper = null;
  };

  /**
   * Defined a clipper inside the image. It means that you wan't to draw a 
   * specific part of the image.
   *
   * @method
   * @instance
   * @memberof! Theatre.graphics.Image
   *
   * @param {int} x
   * @param {int} y
   * @param {int} width
   * @param {int} height
   *
   * @return {Theatre.graphics.Image}
   */
  Image.prototype.clip = function (x, y, width, height) {
    this.clipper = {
      x: x,
      y: y,
      width: width,
      height: height
    };

    return this;
  };

  /**
   * Display the image on screen.
   *
   * @method
   * @instance
   * @memberof! Theatre.graphics.Circle
   *
   * @param {Theatre.Screen} screen
   */
  Image.prototype.display = function (screen) {
    if (null === this.clipper) {
      screen.context.drawImage(this.image, this.x, this.y);

      return;
    }

    screen.context.drawImage(
      this.image,
      this.clipper.x,
      this.clipper.y,
      this.clipper.width,
      this.clipper.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  };

  exports.Image = Image;
})(window.Theatre.graphics);
