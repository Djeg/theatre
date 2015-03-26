describe('A collider', function () {
  it('ensure collision between two boxes', function () {
    var box1            = new Theatre.graphics.Box(10, 10, 100, 100);
    var box2            = new Theatre.graphics.Box(30, 30, 100, 100);
    var collision       = new Theatre.Collider(false);
    var strictCollision = new Theatre.Collider(true);

    expect(collision.betweenBoxes(box1, box2)).toBe(true);

    box2.x = 110;
    box2.y = 110;

    expect(collision.betweenBoxes(box1, box2)).toBe(true);
    expect(strictCollision.betweenBoxes(box1, box2)).toBe(false);

    box2.x = 111;

    expect(collision.betweenBoxes(box1, box2)).toBe(false);
    expect(strictCollision.betweenBoxes(box1, box2)).toBe(false);
  });
});
