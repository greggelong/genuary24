let capture;
let scl = 1;
let rock = false;
let lasttouch = 0;

let poss; // not pos
//let cnv;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //let cx = windowWidth / 2 - cnv.width / 2;
  //let cy = windowHeight / 2 - cnv.width / 2;
  //cnv.position(cx, cy);
  capture = createCapture(VIDEO);
  capture.hide();
  capture.size(windowWidth/10,windowHeight/10)
  angleMode(DEGREES);
  imageMode(CENTER);
}

function draw() {
  background(0);

  drostit();
}

function drostit() {
  for (let i = 0; i < 8; i++) {
    push();
    translate(width / 2 + poss / 2, height / 2);
     if (rock && i >= 0) {
       rotate(sin(frameCount % 360) * 30+i*2);
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


function touchStarted() {
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    /// toggle mix
    if (!rock) {
      rock = true;
    } else {
      rock = false;
    }
  }

  lasttouch = currenttime;
}

function mouseClicked() {
  touchStarted();
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
