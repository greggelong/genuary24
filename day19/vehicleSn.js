class Vehicle {
  constructor(x, y, c, s) {
    this.pos = createVector(x, y);

    this.vel = createVector(0, 0); // a simple vector
    this.acc = createVector(0, 0);
    //this.mass = mass;
    //this.r = sqrt(mass)*10;
    this.c = c;
    this.speed = s; //random(1,5);
    this.body = [];
    this.sl = 111;
    for (let i = 0; i < this.sl; i++) {
      this.body.push(this.pos.copy());
    }
  }
  // methods
  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    //pop old

    if (this.body.length > this.sl) {
      this.body.pop();
    }
    this.vel.add(this.acc);

    // use limit to make sure velocity does not grow out
    this.vel.limit(this.speed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    // first unshift old to array
    this.body.unshift(this.pos.copy());
  }

  edges() {
    if (this.pos.y > height) {
      //this.pos.y = 0;

      this.vel.y *= -1;
    }

    if (this.pos.y < 0) {
      //this.pos.y = height;

      this.vel.y *= -1;
    }
    if (this.pos.x > width) {
      //this.pos.x = 0;

      this.vel.x *= -1;
    }
    if (this.pos.x < 0) {
      //this.pos.x = width;

      this.vel.x *= -1;
    }
  }

  show() {
    // draw body
    noFill();

    stroke(this.c);
    strokeWeight(8);
    beginShape();
    for (let i = 0; i < this.body.length; i++) {
      vertex(this.body[i].x, this.body[i].y);
    }
    endShape();
    strokeWeight(1);

    //
  }
}
