// Simple Pendulum Simulation
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/159-simple-pendulum-simulation.html
// https://youtu.be/NBWMtlbbOag
// https://editor.p5js.org/codingtrain/sketches/SN-39sHAC

let angle;
let ls = 0.5; // length change speed
let angleV = 0;
let angleA = 0;
let pg;
let lss = 0.1;
let bob;
let len;
let origin;
let img;
let fillit;
let cnv;
let gravity = 1;

function preload() {
  img = loadImage("lb.png");
}

function setup() {
  cnv = createCanvas(800, 800);
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);
  origin = createVector(400, 0);
  angle = PI / 4;
  bob = createVector();
  len = 200;
  pg = createGraphics(width, height);
  imageMode(CENTER);
  img.resize(100, 0);
}

function draw() {
  background(0);
  image(pg, width / 2, height / 2); // because I have centered the graphics
  //lss =random(0.03,0.2)

  if (len > 500) {
    ls *= -1;
    lss = 0;
    ls = -1;
    //background(255)
  }
  if (len < 50) {
    ls *= -1;
    lss = random(0.003, 0.1);
    ls = 1;
  }
  let force = gravity * sin(angle);
  angleA = (-1 * force) / len;
  angleV += angleA;
  angle += angleV;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255, 0, 0);
  strokeWeight(2);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  push();
  translate(bob.x, bob.y);
  rotate(-angle);
  image(img, 0, 0);
  noStroke();

  if (frameCount % 30 === 0) {
    if (floor(random(10)) > 5) {
      fillit = true;
    } else {
      fillit = false;
    }
  }
  if (fillit) {
    fill(255, 255, 0, 122);
    pg.background(200, 10);
  } else {
    noFill();
    pg.background(0, 10);
  }
  circle(0, +45, 74);
  pop();

  pg.noStroke();
  pg.fill(255, 255, 0);
  sz = random(3, 30);
  pg.ellipse(bob.x, bob.y + 55, sz, sz);
  ls += lss;
  len += ls;
  print(ls, lss);
}
