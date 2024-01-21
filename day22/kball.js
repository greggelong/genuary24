class Kball {
  constructor() {
    this.clr = random(clrs);
    //this.sa = random([0, 30, 33, 45, , 0, 60, 70]); //start angle
    //this.en = random(90);
    this.r = random([20, 50, 100, 300, 400]);
    this.x = random(width);
    this.y = random(height);
    //this.sw = random(2, 5);
    this.xspeed = 0;
    this.yspeed = 0;
  }

  show() {
    // strokeWeight(this.sw);
    // stroke(this.clr);
    noStroke();
    // arc
    fill(this.clr);
    ellipse(this.x, this.y, this.r, this.r);
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
