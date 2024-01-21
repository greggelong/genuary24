// colors yellow, red , blue, whiteX6 as white is more common
let clrs;
let lasttouch = 0; // for debouncing touch
let blocks = [];
let cnv, cx, xy;
let mycheck;

function setup() {
  cnv = createCanvas(800, 800);
  cx = (windowWidth - width) / 2;
  cy = (windowHeight - height) / 2;
  cnv.position(cx, cy);
  background("#f9f9f9"); //background("#30303a");
  mycheck = createCheckbox("dynamic if checked", true);
  mycheck.position(cx, cy + height + 20);

  clrs = [
    color(255, 0, 0, 20), // Red
    color(255, 255, 0, 20), // Yellow
    color(0, 0, 255, 20), // Blue
    color(255, 165, 0, 20), // Orange
    color(0, 255, 0, 20), // Green
    color(128, 0, 128, 20), // Purple
    color(255, 192, 203, 20), // Pink
    color(0, 255, 255, 20), // Cyan
    color(0, 191, 255, 20), // Turquoise
    color(139, 69, 19, 20), // Brown
    color(210, 105, 30, 20), // Chocolate
  ];
  // for(let i =0;i<100;i++){
  //    let newblock = new Block(color( "#f9f9f9"));
  //     blocks.push(newblock);
  //     print("bing",1);

  // }
}

function draw() {
  if (blocks.length > 0) {
    background("#f9f9f9"); //background("#30303a");
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].edges();
      if (mycheck.checked()) {
        blocks[i].move();
      }
      blocks[i].show();
    }
  }
}

function touchStarted() {
  // for Ios
  // calculate time since last touch
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    print("cliked");
    let elements = ["l", "l", "a", "b"];
    let rndele = random(elements);
    let newele;

    if (rndele === "l") {
      newele = new Kline();
    } else if (rndele === "b") {
      newele = new Kball();
    } else {
      newele = new Karc();
    }
    blocks.push(newele);

    // update
    lasttouch = currenttime;
  }
}

function mousePressed() {
  touchStarted();
  // for firefox computer browsers
}
