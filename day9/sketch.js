// brightness mirror
// see notebook
// smaller capture video draw to canvas not pixel but shape or character
let myvideo;
let vScale; // global video scaling variable
//let greyscale = [0,32,64,96,128,160,192,224,255,255,255,255,255]
let greyscale = [0, 32, 64, 96, 128, 160, 192, 224, 255];
let greyscaleASCII = [
  ".",
  ":",
  "-",
  "=",
  "+",
  "*",
  "#",
  "%",
  "8",
  "O",
  "o",
  "X",
  "H",
  "W",
  "M",
  "B",
  "@",
];
let greyscaleASCIIa = [
  ".",
  "'",
  "`",
  "^",
  ",",
  ":",
  ";",
  "I",
  "l",
  "!",
  "i",
  ">",
  "~",
  "+",
  "_",
  "?",
  "]",
  "[",
  "}",
  "{",
  "1",
  ")",
  "(",
  "|",
  "\\",
  "/",
  "t",
  "f",
  "j",
  "r",
  "x",
  "n",
  "u",
  "v",
  "c",
  "z",
  "X",
  "Y",
  "U",
  "J",
  "C",
  "L",
  "0",
  "O",
  "Z",
  "m",
  "w",
  "q",
  "p",
  "d",
  "b",
  "k",
  "h",
  "a",
  "o",
  "*",
  "#",
  "M",
  "W",
  "&",
  "8",
  "%",
  "B",
  "@",
  "$",
];

let hanzi = [
  "善",
  "随",
  "俗",
  "若",
  "水",
  "乡",
  "上",
  "入",
  "。",
  "。",
  "。",
  "。",
  "。",
  "。",
  "。",
];

function setup() {
  createCanvas(windowWidth, windowHeight); // larger canvas to draw to

  if (width < height) {
    vScale = width / 30; // vScale tied to window width so it can work on phone and computer
    console.log("by width");
  } else {
    vScale = floor(height / 30);
    console.log("by height");
  }
  pixelDensity(1);
  myvideo = createCapture(VIDEO);
  myvideo.size(width / vScale, height / vScale);
  myvideo.hide();
  // video dom element , the source, will be smaller by vScale which is 40 by 30 to improve performance
  frameRate(5);
  textAlign(LEFT, TOP);
  textFont("Courier New");
  //textSize(24);
}

function draw() {
  background(0);

  // load the myvideo to pixel array
  myvideo.loadPixels(); // gets a pixes arry for video capture

  // loop through the small video capture
  for (let y = 0; y < myvideo.height; y++) {
    // for each y there are some x's
    for (let x = 0; x < myvideo.width; x++) {
      //this mirrors the index for see note book
      let index = (myvideo.width - x - 1 + y * myvideo.width) * 4;
      let r = myvideo.pixels[index + 0];
      let g = myvideo.pixels[index + 1];
      let b = myvideo.pixels[index + 2];

      let bright = floor((r + g + b) / 3); // the brightness or greyscale 0-255 is the average of the rgb
      let hanidx = floor(map(bright, 0, 255, 0, greyscaleASCIIa.length - 1));
      //print(gscale)
      // variable cindex is the index of the chineseChar

      //cindex = map(bright, 0, 255, 1, 8);

      //draw a random character on the large canvas with the brightness of each pixel on the small dom video
      fill(0, 255, 0); // this is the restricted
      //fill(bright); // this is the full range
      // we need to multply by vscale to set the place for larger video
      //textSize(vScale);
      //text(random(chiChar), x * vScale, y * vScale);
      noStroke();
      textSize(vScale);
      text(greyscaleASCIIa[hanidx], x * vScale, y * vScale);
    }
  }

  //console.log('bing');
  //noLoop();
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  //if (key === 'g') {
  //  saveGif('reflection.gif', 15);
  // }
  if (key === "s") {
    saveCanvas("characterB", "jpg");
  }
}
