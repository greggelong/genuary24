let snake = [];
let segmentSize = 20;
let numSegments = 5;
let angle;
let r = 300;
let rate = 0.7;
let obo = false;
let cnv;
function setup() {
  cnv = createCanvas(800, 800);
  let cx = floor((windowWidth - cnv.width) / 2);
  let cy = floor((windowHeight - cnv.height) / 2);
  cnv.position(cx, cy);
  angleMode(DEGREES);
  //frameRate(35);
  makeSnake();
  rectMode(CENTER);

  angle = snake.length - 1 * 5.5;
}

function draw() {
  background(30);
  textSize(40);
  fill(128);
  if (obo) {
    text("无为-let it be", width / 2 - 95, 48);
  } else {
    text("加载-loading", width / 2 - 95, 48);
  }
  translate(width / 2, height / 2);

  if (r < 0) {
    r = 300;
    angle = 0;
    rate = 0.7;
    obo = false;
    makeSnake();
  }

  // Move the snake
  for (let i = 0; i < snake.length; i++) {
    // if(mouseX !=pmouseX || mouseY != pmouseY){

    //let head = snake[snake.length - 1];

    let x = cos(angle + i * 5.5) * r;
    let y = sin(angle + i * 5.5) * r;
    snake[i] = createVector(x, y);
    //snake[i] = snake[i + 1].copy();
    // }
  }

  // let head = snake[snake.length - 1];

  // head.x = cos(angle * 5.5) * r;
  // head.y = sin(angle * 5.5) * r;

  angle += rate;
  //print(angle)
  // Draw the snake

  // check collision
  if (snake[0].dist(snake[snake.length - 1]) < 50 && !obo) {
    print("collide");
    obo = true;
  }

  if (obo) {
    r = r - 1;
  }
  if (frameCount % 3 == 0) mouseReleased();
  //beginShape();
  noStroke();
  //noFill();
  fill(255, 60);
  //strokeWeight(40+ abs(sin(frameCount)))
  //stroke(255);
  for (let i = 0; i < snake.length; i++) {
    //strokeWeight(40 + 40 * abs(sin(frameCount)));
    let cs = 40 + 50 * abs(sin(frameCount));
    //ellipse(snake[i].x, snake[i].y, cs, cs);
    rect(snake[i].x, snake[i].y, cs, cs);
    //vertex(snake[i].x,snake[i].y)
  }
  //endShape();
}

function makeSnake() {
  snake = [];
  for (let i = 0; i < numSegments; i++) {
    x = cos(i * 6.5) * 300;
    y = sin(i * 6.5) * 300;
    snake.push(createVector(x, y));
  }
}

function mouseReleased() {
  // Update the head position with mouse click
  if (!obo) {
    snake.push(createVector(snake[4].x, snake[4].y));
    print("make new seg");
  }
}
