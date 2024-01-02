let capture;
let scl = 1;

let poss; // not pos
let cnv;
function setup() {
  cnv = createCanvas(640, 480);
  let cx = windowWidth / 2 - cnv.width / 2;
  let cy = windowHeight / 2 - cnv.width / 2;
  cnv.position(cx, cy);
  capture = createCapture(VIDEO);
  capture.hide();
  angleMode(DEGREES);
  imageMode(CENTER);
}

function draw() {
  background(0);

  drostit();
}

function drostit() {
  for (let i = 0; i < 7; i++) {
    push();
    translate(width / 2 + poss / 2, height / 2);
    if (i >= 0) {
      rotate(sin(frameCount % 360) * 30);
    }

    scale(-scl, scl);
    image(capture, 0, 0, -width * scl, height * scl);
    pop();
    scl *= 0.76;

    //scl -= 0.15;
    poss += (capture.width * scl) / 5; //2.5//(capture.width * scl) / 5;

    //print(pos)
  }
  scl = 1;

  poss = 0;
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === "g") {
    saveGif("reflection.gif", 15);
  }
  if (key === "s") {
    saveCanvas("reflection", "jpg");
  }
}
