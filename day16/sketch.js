let cnv;
let grid = [];
let sz = 8;

function setup() {
  cnv = createCanvas(800, 800); //(gridSize * cellSize + 10, gridSize * cellSize + 10);
  let cx = windowWidth / 2 - cnv.width / 2;
  let cy = windowHeight / 2 - cnv.width / 2;
  cnv.position(cx, cy);
  background(255);
  makeGrid();
  print(grid.length);
  showGrid();
}

function makeGrid() {
  for (let j = 0; j < 100; j++) {
    grid[j] = [];
    for (let i = 0; i < 100; i++) {
      grid[j][i] = floor(random(2));
    }
  }
}

function showGrid() {
  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < 100; i++) {
      if (grid[j][i] === 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(i * sz, j * sz, sz, sz);
    }
  }
}
