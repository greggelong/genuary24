let greg;
let mj;
let cnv;
let vcp; // vera color palette
let lasttouch = 0;
let clicks = 0;

function setup() {
  cnv = createCanvas(800, 800); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
  let cx = windowWidth / 2 - cnv.width / 2;
  let cy = windowHeight / 2 - cnv.width / 2;
  cnv.position(cx, cy);
  vcp = [
    color(255, 0, 0), // Red
    color(0, 255, 0), // Green
    color(0, 0, 255), // Blue
    color(255, 255, 0), // Yellow
    color(255, 0, 255), // Magenta
    color(0, 255, 255), // Cyan
    //color(255, 128, 0), // Orange
    color(255), //white
    color(128, 0, 255), // Purple
    //color(0, 255, 128), // Turquoise
    //color(128, 255, 0), // Lime
  ];
  angleMode(DEGREES);
  background(255);
  strokeWeight(4);
  greg = new Gurtle(width / 2.5, height / 1.5, color(255, 255, 0));
  frameRate(25);
}

function touchStarted() {
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    /// toggle mix
  }

  lasttouch = currenttime;
}

function mouseClicked() {
  touchStarted();
}

function draw() {
  background(60);
  push();
  translate(width / 2, height / 2);
  rotate(frameCount);
  greg.x = -20;
  greg.y = 25;
  rotate(frameCount);
  pentri(greg, 200);
  pop();
}

function sqr(obj) {
  for (let i = 0; i < 4; i++) {
    obj.forward(100);
    obj.right(90);
  }
}

function pentri(obj, sz) {
  for (let i = 0; i < 3; i++) {
    obj.forward(sz);
    obj.left(120);
    obj.forward((5 * sz) / 3);
    obj.right(120);
    obj.forward(sz / 3);
    obj.right(60);
    obj.forward(2 * sz);
    obj.right(120);
    obj.forward((5 * sz) / 3);
    obj.right(120);
    obj.forward(sz / 3);
    obj.forward((2 * sz) / 3);
    obj.right(180);
  }
}
