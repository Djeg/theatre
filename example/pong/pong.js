window.onload = function () {
  var screen     = new Theatre.Screen('pong', 800, 600);
  var game       = new Theatre.GameLoop(60);
  var leftStick  = new Theatre.graphics.Box(10, 250, 10, 100);
  var rightStick = new Theatre.graphics.Box(780, 250, 10, 100);
  var ball       = new Theatre.graphics.Circle(390, 290, 10);

  ball.absissaSpeed = 10;
  ball.orderedSpeed = 10;
  ball.fill(true);

  function handleCommand() {
    var rapidity = 10;

    if (Theatre.keyboard.isPressed(Theatre.KEYS.z)) {
      leftStick.y -= rapidity;

      if (leftStick.y < 0) {
        leftStick.y = 0;
      }
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.s)) {
      leftStick.y += rapidity;

      if ((leftStick.y + leftStick.height) > screen.resolutionY) {
        leftStick.y = screen.resolutionY - leftStick.height;
      }
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.p)) {
      rightStick.y -= rapidity;

      if (rightStick.y < 0) {
        rightStick.y = 0;
      }
    }

    if (Theatre.keyboard.isPressed(Theatre.KEYS.m)) {
      rightStick.y += rapidity;

      if ((rightStick.y + rightStick.height) > screen.resolutionY) {
        rightStick.y = screen.resolutionY - rightStick.height;
      }
    }
  };

  function moveBall () {
    ball.x += ball.absissaSpeed;
    ball.y += ball.orderedSpeed;

    if (ball.x < (leftStick.x + leftStick.width)) {
      ball.x = (screen.resolutionX/2) - ball.r;
    }

    if (ball.x > rightStick.x) {
      ball.x = (screen.resolutionX/2) - ball.r;
    }

    if (ball.y <= 0) {
      ball.y = 0;
      ball.orderedSpeed = ball.orderedSpeed * -1;
    }

    if (ball.y >= screen.resolutionY) {
      ball.y = screen.resolutionY;
      ball.orderedSpeed = -ball.orderedSpeed;
    }

    if (Theatre.collision.betweenBoxes(leftStick, ball)) {
      ball.absissaSpeed = ball.absissaSpeed * -1;
    }

    if (Theatre.collision.betweenBoxes(rightStick, ball)) {
      ball.absissaSpeed = -ball.absissaSpeed;
    }
  };

  game.loop(function pong () {
    handleCommand();
    moveBall();

    screen.clean();

    screen.draw(leftStick);
    screen.draw(rightStick);
    screen.draw(ball);
  });
};
