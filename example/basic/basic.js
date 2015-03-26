window.onload = function () {

  var screen = new Theatre.Screen('game', 800, 600);
  var gameLoop = new Theatre.GameLoop(60);
  var box = new Theatre.graphics.Box(0, 0, 100, 200);
  box.fill(true);
  box.setFillStyle('red');

  gameLoop.loop(function game () {
    if (Theatre.keyboard.isPressed(Theatre.KEYS.a)) {
      box.setFillStyle('blue');
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.b)) {
      box.setFillStyle('red');
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.left)) {
      box.x -= 5;
    }
  
    if (Theatre.keyboard.isPressed(Theatre.KEYS.right)) {
      box.x += 5;
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.up)) {
      box.y -= 5;
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.down)) {
      box.y += 5;
    }

    screen.clean();

    screen.draw(box);
  });
};
