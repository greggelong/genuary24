let myvideo;
let vScale; // global video scaling variable
let particles = [];
let cnv; // holds the canvas
let missle; // hold missle image
let drop; // hold drop image
let waters; // hold water sound
let wars; // hold warsound
let state = 0; // hold the state of the shower
let lasttouch = 0; // for debouncing touch
let first = true; // boolean for first touch
CanvasRenderingContext2D.willReadFrequently = true
function setup() {
  createCanvas(600, 600); // larger canvas to draw to

  if (width < height) {
    vScale = floor(width / 200); // vScale tied to window width so it can work on phone and computer
    console.log("by width");
  } else {
    vScale = floor(height / 200);
    console.log("by height");
  }
  pixelDensity(1);
  myvideo = createCapture(VIDEO);
  myvideo.size(100,100);
  //myvideo.hide();
  // video dom element , the source, will be smaller by vScale which is 40 by 30 to improve performance
  //frameRate(15);
  noSmooth();
}


function touchStarted() {
    // for Ios
    // calculate time since last touch
    const currenttime = millis();
    const timesincelasttouch = currenttime - lasttouch;
  
    if (timesincelasttouch > 500) {
      if (first) {
        first = false;
        print("first time");
    
      }
      state++;
      state = state % 3;
   
      // update
      lasttouch = currenttime;
    }
  }
  
  
  function mousePressed(){
    touchStarted();
    // for firefox computer browsers
  }
  function draw() {
    if (frameCount < 2) {
    }
    //waters.loop()
    if (state === 2) {
      background(0);
      //wars.play()
    } else {
      background(0);
    }
  
    if (state > 0) {
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(150, 10));
      }
  
      for (let particle of particles) {
        let gravity = createVector(0, 0.5);
        particle.applyForce(gravity);
        particle.update();
        particle.show();
      }
  
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].finished()) {
          particles.splice(i, 1);
        }
      }
    }
  }