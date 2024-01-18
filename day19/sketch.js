let unseen;
let clrs;
let lasttouch = 0;
let touching = false;
let snakes = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  clrs = [
    color(211, 211, 211), // Light Gray
    color(0, 128, 128), // Deep Teal
    color(51, 51, 51), // Charcoal Gray
  ];

  background(0); //background(255,215,0)
  unseen = createVector(random(width), random(height));
  rectMode(CENTER);
  for (let i = 0; i < 40; i++) {
    snakes[i] = new Vehicle(
      random(width),
      random(height),
      color(0, 128, 128, 255 - i * 3),
      random(3, 5)
    );
  }
}

function draw() {
  //background(clrs[0]);
  background(0);
  //
  //zero out the touch after 450 frames
  if (frameCount % 450 == 0 && touching) {
    touching = false;
  }
  if (frameCount % 300 == 0 && !touching) {
    unseen = createVector(random(width), random(height));
  } else if (frameCount % 300 != 0 && touching) {
    unseen = createVector(mouseX, mouseY);
  }
  dosnakes();
  // put drawing code here
  // print circle for touch
  if (touching) {
    fill(255, 0, 0, 20);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function dosnakes() {
  // seek myst
  let seekMyst = p5.Vector.sub(unseen, snakes[0].pos);
  seekMyst.setMag(0.1);
  snakes[0].applyForce(seekMyst);
  snakes[0].update();
  snakes[0].edges();
  snakes[0].show();
  for (let i = 1; i < snakes.length; i++) {
    let seekNext = p5.Vector.sub(snakes[i - 1].pos, snakes[i].pos);
    seekNext.setMag(0.1);
    snakes[i].applyForce(seekNext);
    snakes[i].update();
    snakes[i].edges();
    snakes[i].show();
  }
}

function touchStarted() {
  // for Ios
  // calculate time since last touch
  touching = true;
}

function mousePressed() {
  touchStarted();
}

/*
for (let i = 0; i <gregs.length;i++){
  let mousepos = createVector(mouseX,mouseY);
  let seek = p5.Vector.sub(mousepos,gregs[i].pos);
  seek.setMag(0.1);
  gregs[i].applyForce(seek);
  gregs[i].update();
  gregs[i].edges();
  gregs[i].show();
  }

  */
