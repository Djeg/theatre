;(function (exports) {
  'use strict';

  /**
   * A suit of tools helping you detect collisions between graphical objects.
   *
   * @param {boolean} strictMode
   *
   * @class Collider
   * @memberof Theatre
   */
  var Collider = function (strictMode) {
    this.strict = strictMode ? true : false;
  };

  /**
   * Ensure a collision between two boxes.
   *
   * @method
   * @instance
   * @memberof! Theatre.Collider
   * 
   * @param {object} box1
   * @param {object} box2
   *
   * @return boolean
   */
  Collider.prototype.betweenBoxes = function (box1, box2) {
    var absissaCollision, orderedCollision;

    if (this.strict) {
      absissaCollision = (box2.x < (box1.x + box1.width)) && ((box2.x + box2.width) > box1.x);
      orderedCollision = (box2.y < (box1.y + box1.height)) && ((box2.y + box2.height) > box1.y);
    } else {
      absissaCollision = (box2.x <= (box1.x + box1.width)) && ((box2.x + box2.width) >= box1.x);
      orderedCollision = (box2.y <= (box1.y + box1.height)) && ((box2.y + box2.height) >= box1.y);
    }

    return absissaCollision && orderedCollision;
  };

  exports.Collider  = Collider;
  exports.collision = new Collider(false);
})(window.Theatre);
