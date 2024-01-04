let greg;
let mj;
let cnv;
let vcp; // vera color palette
let grid = [];
let gridSize = 12; //6;    12 2, 24 4  6, 1
let cellSize = 125 / 2; //2; // Adjust this based on your canvas size
let lasttouch = 0;
let clicks = 0;

function setup() {
  cnv = createCanvas(760, 760); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
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
    color(255, 128, 0), // Orange
    color(128, 0, 255), // Purple
    color(0, 255, 128), // Turquoise
    color(128, 255, 0), // Lime
  ];
  angleMode(DEGREES);
  background(255);
  frameRate(8);
  gridSetup();
}

function touchStarted() {
  const currenttime = millis();
  const timesincelasttouch = currenttime - lasttouch;

  if (timesincelasttouch > 500) {
    /// toggle mix
    let grdsz = [6, 12, 25, 50];
    let celsz = [125, 62.5, 31.25, 15.625];
    //let rndsz = floor(random(3));
    let rndsz = clicks % 4; // to loop through using modulo
    cellSize = celsz[rndsz];
    gridSize = grdsz[rndsz];
    // call grid setup
    clicks++;
    gridSetup();
  }

  lasttouch = currenttime;
}

function mouseClicked() {
  touchStarted();
}

function gridSetup() {
  // Initialize the grid with an turtle object and color
  for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = new Gurtle(
        i * cellSize + 15,
        j * cellSize + 15,
        random(vcp)
      );
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      msqr(grid[i][j]);
    }
  }
  //noLoop()
}

function sqr(obj) {
  for (let i = 0; i < 4; i++) {
    obj.forward(100);
    obj.right(90);
  }
}

function msqr(obj) {
  // color is taken care of in the object
  let ta = floor(random(4, 38)); //times around
  let tsx = obj.x; // start x pos
  let tsy = obj.y; // start y poso put back
  for (let i = 0; i < ta; i++) {
    obj.forward(cellSize / 1.2, cellSize); //(random(cellSize * 0.333, cellSize));
    obj.right(random(75, 100));
  }
  obj.angle = 0; // reset the object
  obj.x = tsx;
  obj.y = tsy;
}
