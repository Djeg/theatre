;(function (exports, doc) {
  'use strict';

  /**
   * @constant {object}
   * @memberof Theatre
   */
  var KEYS = {
    ENTER:     13,
    enter:     13,
    'ESCAPE':  27,
    'escape':  27,
    SPACE:     32,
    space:     32,
    UP:        38,
    up:        38,
    DOWN:      40,
    down:      40,
    LEFT:      37,
    left:      37,
    RIGHT:     39,
    right:     39,
    SHIFT:     16,
    shift:     16,
    A:         65,
    B:         66,
    C:         67,
    D:         68,
    E:         69,
    F:         70,
    G:         71,
    H:         72,
    I:         73,
    J:         74,
    K:         75,
    L:         76,
    M:         77,
    N:         78,
    O:         79,
    P:         80,
    Q:         81,
    R:         82,
    S:         83,
    T:         84,
    U:         85,
    V:         86,
    W:         87,
    X:         88,
    Y:         89,
    Z:         90,
    a:         65,
    b:         66,
    c:         67,
    d:         68,
    e:         69,
    f:         70,
    g:         71,
    h:         72,
    i:         73,
    j:         74,
    k:         75,
    l:         76,
    m:         77,
    n:         78,
    o:         79,
    p:         80,
    q:         81,
    r:         82,
    s:         83,
    t:         84,
    u:         85,
    v:         86,
    w:         87,
    x:         88,
    y:         89,
    z:         90,
    ',':       44,
    ';':       59,
    ':':       58,
    '!':       33,
    '?':       63,
    '.':       46,
    '/':       47,
    '§':       167,
    '^':       94,
    '$':       36,
    'ù':       249,
    '*':       42,
    '¨':       168,
    '£':       163,
    '%':       37,
    'µ':       181,
    'ê':       234,
    '&':       238,
    'é':       233,
    '"':       34,
    '\'':      39,
    '(':       40,
    '-':       45,
    'è':       232,
    '_':       95,
    'ç':       231,
    'à':       224,
    ')':       41,
    '=':       61,
    '~':       126,
    '#':       35,
    '{':       123,
    '[':       91,
    '|':       124,
    '`':       96,
    '\\':      92,
    '@':       64,
    ']':       93,
    '}':       125,
    '<':       60,
    '>':       62,
    'œ':       339,
    '°':       176,
    '+':       43,
    '0':       48,
    '1':       49,
    '2':       50,
    '3':       51,
    '4':       52,
    '5':       53,
    '6':       54,
    '7':       55,
    '8':       56,
    '9':       57
  };

  var bindEvents = function (keyboard) {
    doc.addEventListener('keydown', function (event) {
      var code = event.key ? event.key : event.keyCode;

      keyboard.press(code);
    });

    doc.addEventListener('keyup', function (event) {
      var code = event.key ? event.key : event.keyCode;

      keyboard.release(code);
    });
  };

  /**
   * A theatre keyboard watcher.
   *
   * @memberof Theatre
   * @class
   */
  var Keyboard = function () {
    this.pressedKeys = [];

    bindEvents(this);
  };

  /**
   * Press a given key.
   * @method
   * @instance
   * @memberof! Theatre.Keyboard
   *
   * @param {int} code
   */
  Keyboard.prototype.press = function (code) {
    this.pressedKeys[code] = true;
  };

  /**
   * Release a given key.
   * @method
   * @instance
   * @memberof! Theatre.Keyboard
   *
   * @param {int} code
   */
  Keyboard.prototype.release = function (code) {
    delete this.pressedKeys[code];
  };

  /**
   * Test if a given key is pressed.
   * @method
   * @instance
   * @memberof! Theatre.Keyboard
   *
   * @param {int} code
   *
   * @return {boolean}
   */
  Keyboard.prototype.isPressed = function (code) {
    return true === this.pressedKeys[code];
  };

  /**
   * Like `isPress` but release the key after the test.
   * @method
   * @instance
   * @memberof! Theatre.Keyboard
   *
   * @param {int} code
   *
   * @return {boolean}
   */
  Keyboard.prototype.isPushed = function (code) {
    var pressed = this.isPressed(code);
    this.release(code);

    return pressed;
  };

  exports.keyboard = new Keyboard();
  exports.Keyboard = Keyboard;
  exports.KEYS     = KEYS;
})(window.Theatre, window.document);
