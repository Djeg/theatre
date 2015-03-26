;(function (exports, doc) {
  'use strict';
  var getContext = function (canvas) {
    if (undefined === canvas.getContext) {
      throw new Error('Your browser does not support 2D context technologies :-(');
    }

    return canvas.getContext('2d');
  };

  /**
   * A theatre instance.
   *
   * @param {string} canvasid
   * @param {Theatre.GameLoop} gameLoop
   *
   * @class Theatre
   */
  var Theatre = function (canvasid, gameLoop) {
    this.canvas   = doc.getElementById(canvasid);
    this.context  = getContext(this.canvas);
    this.gameLoop = gameLoop;
  };

  exports.Theatre = Theatre;
})(window, window.document);
