describe('The theatre', function () {
  it('defined the theatre namespace', function () {
    expect(Theatre).toBeDefined();
  });

  it('can be create with a valid canvas id', function () {
    var theatre = new Theatre('game');
    var canvas  = document.getElementById('game');
    var ctx     = canvas.getContext('2d');

    expect(theatre.canvas).toBe(canvas);
  });
});
