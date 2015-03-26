describe('A screen', function () {
  it('can draw something', function () {
    var screen = new Theatre.Screen('game', 800, 600);

    var element = {
      display: function (s) {
        expect(s).toBe(screen);
      }
    };

    expect(screen.draw(element)).toBe(screen);
  });

  it('can clear the screen', function () {
    var screen = new Theatre.Screen('game', 800, 600);
    spyOn(screen.context, 'clearRect');

    screen.clean();
    expect(screen.context.clearRect).toHaveBeenCalledWith(0, 0, 800, 600);
  });
});
