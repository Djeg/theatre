describe('A game loop', function () {
  it('loop over a callback on each FPS', function () {
    var gameLoop = new Theatre.GameLoop(10);
    var i        = 0;
    var now      = new Date().getTime();

    gameLoop.loop(function () {
        i += 1;
        var n = new Date().getTime();

        if ((now - n) > 1000) {
            expect(i).toBe(10);
            gameLoop.stop();
        }
    });
  });
});
