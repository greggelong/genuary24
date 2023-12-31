let myvideo;
let vScale; // global video scaling variable
let img; //
let sort = false;
let lasttouch = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); // larger canvas to draw to

  if (width < height) {
    vScale = floor(width / 150); // vScale tied to window width so it can work on phone and computer
    console.log("by width");
  } else {
    vScale = floor(height / 150);
    console.log("by height");
  }
  pixelDensity(1);
  myvideo = createCapture(VIDEO);
  myvideo.size(width / vScale, height / vScale);
  myvideo.hide();
  // video dom element , the source, will be smaller by vScale which is 40 by 30 to improve performance
  frameRate(15);
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
        waters.play();
      }
      state++;
      state = state % 3;
  
      if (state === 0) {
        // .isPlaying() returns a boolean
  
        waters.stop();
        wars.stop();
      } else if (state === 1) {
        wars.stop();
        waters.play();
        waters.loop();
      } else if (state === 2) {
        waters.stop();
        wars.play();
        wars.loop();
      }
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
      background(200);
      //wars.play()
    } else {
      background(255);
    }
  
    image(img, 300, 40, 100, 120);
    if (state > 0) {
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(300, 70));
      }
  
      for (let particle of particles) {
        let gravity = createVector(0, 0.2);
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