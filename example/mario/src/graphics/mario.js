mario.graphics.mario = function () {
  var img = new Image();
  img.src = 'mario.png';

  this.image      = new Theatre.graphics.Image(img);
  this.isRunnig   = false;
  this.isJumping  = false;
  this.isCrouched = false;
  this.move       = false;
};

mario.graphics.mario.prototype.display = function () {
};
