describe('Launch and bind', function () {
  it('launch a binded method as callback', function () {
    var obj = {
      x: "foo",
      getX: function () { return this.x; }
    };

    var toLaunch = function (callback) {
      return callback();
    };

    expect(Theatre.utils.launchAndBind(toLaunch, obj, 'getX')).toBe('foo');
  });
});
