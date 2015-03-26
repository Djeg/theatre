describe('A box', function () {
  var screen = new Theatre.Screen('game', 800, 600);

  it('can be drawed as a stroked box', function () {
    var box = new Theatre.graphics.Box(0, 0, 10, 10);
    box
      .setStrokeStyle('#EDAAB7')
    ;

    spyOn(screen.context, 'strokeRect');

    box.display(screen);

    expect(screen.context.strokeStyle).toBe('#edaab7');
    expect(screen.context.strokeRect).toHaveBeenCalledWith(0, 0, 10, 10);
  });

  it('can be drawed as a filled box', function () {
    var box = new Theatre.graphics.Box(0, 0, 100, 300);
    box.fill(true).setFillStyle('#FFFFFF');

    spyOn(screen.context, 'fillRect');

    box.display(screen);

    expect(screen.context.fillStyle).toBe('#ffffff');
    expect(screen.context.fillRect).toHaveBeenCalledWith(0, 0, 100, 300);
  });
})

