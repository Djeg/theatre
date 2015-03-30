describe('An image graphic', function () {
  var loadImage = function (callback) {
    var image    = new Image();
    image.src    = '/base/spec/fixtures/cat.png';
    image.onload = function () {
      callback(image);
    };
  };
  var screen = new Theatre.Screen('game', 800, 600);

  it('is defined', function () {
    expect(Theatre.graphics.Image).toBeDefined();
  });

  it('contains an image object', function () {
    loadImage(function onImageLoad (img) {
      var image = new Theatre.graphics.Image(img, 10, 20);

      expect(image.width).toBe(img.naturalWidth());
      expect(image.height).toBe(img.naturalHeight());
      expect(image.x).toBe(10);
      expect(image.y).toBe(20);
    });
  });

  it('can be drawed on a screen', function () {
    spyOn(screen.context, 'drawImage');

    loadImage(function onImageLoad (img) {
      var image = new Theatre.graphics.Image(img, 15, 60);

      screen.draw(image);

      expect(screen.context.drawImage).toHaveBeenCalledWith(img, 15, 60);
    });
  });

  it('can be clipped and draw only the clipped part', function () {
    spyOn(screen.context, 'drawImage');

    loadImage(function onImageLoad (img) {
      var image = new Theatre.graphics.Image(img, 15, 40);

      image.clip(10, 5, 100, 50);

      screen.draw(image);

      expect(screen.context.drawImage).toHaveBeenCalledWith(img, 10, 5, 100, 50, 15, 40, image.width, image.height);
    });
  });
});
