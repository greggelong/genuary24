let greg;
let mj;
let cnv


function setup() {
    cnv = createCanvas(800,800);
    let cx = windowWidth / 2 - cnv.width / 2;
    let cy = windowHeight / 2 - cnv.width / 2;
    cnv.position(cx, cy);
  angleMode(DEGREES);
  background(255);
  frameRate(3)

  greg = new Gurtle(width/2,height/2,color(255,0,0));
  mj = new Gurtle(width/4, height/2, color(255,255,0));

  sqr(greg);
  sqr(mj);
  
}

function draw(){
  background(80);
  msqr(greg)
  sqr(mj)
  //noLoop()

}

 

function sqr(obj){
  for (let i=0; i<4;i++){
    obj.forward(100)
    obj.right(90)
  }
}


function msqr(obj){
    let ta = floor(random(8,30))
    let tsx = obj.x  // start x pos
    let tsy = obj.y  // start y poso put back
    for (let i=0; i<ta;i++){
      obj.forward(random(90,100))
      obj.right(random(90,120))
    }
    obj.angle =0;  // reset the object 
    obj.x = tsx
    obj.y = tsy
  }