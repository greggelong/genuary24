class Kline {
  constructor() {
    this.clr = color(0);
    this.dir = random(["h", "h", "v", "v", "v", "d", "d"]);
    this.len = random([500, 400, 50, 100, 200]);
    this.x = random(width);
    this.y = random(height);
    this.sw = random(2, 5);
    this.a = random(360); /// for diagonal line
    this.xspeed = 0;
    this.yspeed = 0;
  }

  show() {
    strokeWeight(this.sw);
    stroke(this.clr);
    // if horizontal
    if (this.dir === "h") {
      line(this.x, this.y, this.x + this.len, this.y);
    } else if (this.dir === "v") {
      line(this.x, this.y, this.x, this.y + this.len);
    } else {
      push();
      translate(this.x, this.y);
      rotate(this.a);
      line(this.x, this.y, this.x, this.y + this.len);
      pop();
    }
  }
  move() {
    //moves randomly up down left or right
    this.xspeed = random([0, 2, -2]);
    this.yspeed = random([0, 2, -2]);
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  edges() {
    if (this.x > width + this.w) {
      this.x = 5;
    }
    if (this.x < 0 - this.w) {
      this.x = width;
    }
    if (this.y > height + this.h) {
      this.y = 5;
    }
    if (this.y < 0 - this.h) {
      this.y = 5;
    }
  }
}
