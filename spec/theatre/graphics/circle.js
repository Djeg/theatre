describe('A circle', function () {
  var circle = new Theatre.graphics.Circle(10, 12, 30);
  var screen = new Theatre.Screen('game', 800, 600);

  it('contains coordinate and rayon', function () {
    expect(circle.x).toBe(10);
    expect(circle.y).toBe(12);
    expect(circle.r).toBe(30);
  });

  it('can be display on a screen, filled', function () {
    spyOn(screen.context, 'beginPath');
    spyOn(screen.context, 'arc');
    spyOn(screen.context, 'fill');

    circle.setFillStyle('#ffffff');
    circle.fill(true);

    circle.display(screen);

    expect(screen.context.fillStyle).toBe('#ffffff');
    expect(screen.context.beginPath).toHaveBeenCalled();
    expect(screen.context.arc).toHaveBeenCalledWith(10, 12, 30, 0, 2 * Math.PI, false);
    expect(screen.context.fill).toHaveBeenCalled();
  });

  it('can be display on a screen, stroked', function () {
    spyOn(screen.context, 'beginPath');
    spyOn(screen.context, 'arc');
    spyOn(screen.context, 'fill');

    circle.setStrokeStyle('#ffffff');

    circle.display(screen);

    expect(screen.context.strokeStyle).toBe('#ffffff');
    expect(screen.context.beginPath).toHaveBeenCalled();
    expect(screen.context.arc).toHaveBeenCalledWith(10, 12, 30, 0, 2 * Math.PI, false);
    expect(screen.context.fill).toHaveBeenCalled();
  });
});
