window.onload = function () {
  var screen     = new Theatre.Screen('mario', 800, 600);
  var game       = new Theatre.GameLoop(60);

  game.loop(function mario () {
    screen.clean();
  });
};
