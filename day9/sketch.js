// brightness mirror
// see notebook
// smaller capture video draw to canvas not pixel but shape or character
let myvideo;
let s1 = 3;
let s2 = 4;
let scroll = 0;
let poemd = `I like to think (and
    the sooner the better!)
    of a cybernetic meadow
    where mammals and computers
    live together in mutually
    programming harmony
    like pure water
    touching clear sky.
    
    I like to think
    (right now, please!)
    of a cybernetic forest
    filled with pines and electronics
    where deer stroll peacefully
    past computers
    as if they were flowers
    with spinning blossoms.
    
    I like to think
    (it has to be!)
    of a cybernetic ecology
    where we are free of our labors
    and joined back to nature,
    returned to our mammal
    brothers and sisters,
    and all watched over
    by machines of loving grace.`;

let textindex = 0;
let textstart = 0;
let asciiArtHistory =
  "ASCII art has a rich history that dates back to the early days of computing. Here's a brief history of ASCII art:\n\n1. 1960s - Birth of ASCII Art: ASCII (American Standard Code for Information Interchange) was developed in the early 1960s to standardize character sets across computers. As computers became more prevalent, users discovered they could create pictures using characters from the ASCII character set. The simplicity of ASCII characters allowed artists to create visual representations using only text.\n\n2. 1970s - Mainframe Art and BBS Era: In the 1970s, computer enthusiasts and artists started creating ASCII art on mainframe computers. With the rise of Bulletin Board Systems (BBS) in the late '70s and '80s, ASCII art became a popular form of expression in online communities. Artists would create intricate pieces, often displayed as banners or signatures on BBS platforms.\n\n3. 1980s - ANSI Art and Demoscene: ANSI art, an extension of ASCII art, emerged in the 1980s with the advent of ANSI escape codes. These codes allowed artists to add colors and create more complex designs. The demoscene, a subculture focused on creating computer demos, contributed significantly to the development of ANSI art. Artists showcased their skills in creating visually stunning works within the constraints of limited computing resources.\n\n4. 1990s - ASCII Art Websites and Email Signatures: The rise of the World Wide Web in the 1990s led to the creation of websites dedicated to ASCII art. These sites served as galleries and resources for artists and enthusiasts. Additionally, ASCII art found its way into email signatures and online communication as a quirky and personalized way to express oneself.\n\n5. 2000s - Emoticons and Online Communities: As online communication became more prevalent, ASCII art evolved into emoticons (emotional icons). Simple smiley faces like :-) and :-( paved the way for a wide range of expressive characters. Online forums and social media platforms embraced ASCII-based emoticons as a means of conveying emotions in text-based conversations.\n\n6. Present Day - Revival and Nostalgia: ASCII art continues to have a presence in online communities, especially in niche groups and forums where artists and enthusiasts appreciate its nostalgic charm. Some modern artists explore ASCII art as a form of retro digital expression, and it occasionally appears in coding projects, gaming communities, and online memes.\n\nThroughout its history, ASCII art has demonstrated the creative potential of limited resources, inspiring generations of artists to push the boundaries of visual expression within the constraints of text characters. Its legacy lives on as a unique and influential form of digital art.";

let texta = poemd.trim().replaceAll("\n", "").replaceAll("\r", "").split(""); //asciiArtHistory.split("");
//  let texta = asciiArtHistory
//   .replaceAll("\n", " ")
//   .replaceAll("\r", " ")
//   .split("");
console.log(texta);
console.log("hello");
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
      if (y === floor(myvideo.height / 4)) {
        fill(255, 255, 0);
        noStroke();
        // the text index + x and the textindex in incremented outside the loop
        text(texta[(textindex + x) % texta.length], x * vScale, y * vScale);
      } else {
        text(greyscaleASCIIa[hanidx], x * vScale, y * vScale);
      }
    }
    //if (frameCount % 5 === 0) textstart++;

    if (textindex >= texta.length) {
      //textstart = 0;
      textindex = 0;
    }
    //textindex = textstart;
    //print(textindex)
  }
  textindex++; // increase only after the whole thing has be
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
