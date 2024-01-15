class Lettr {
  constructor(x, y, letstr) {
    // they will take x and y
    this.x = x;
    this.y = y;
    this.letstr = letstr;
  }

  show() {
    //
    //let clr = 0;
    let strind = 0;
    for (let j = 0; j < 8; j++) {
      for (let i = 0; i < 8; i++) {
        if (this.letstr.charAt(strind) === "0") {
          stroke(255);
        } else {
          stroke(0);
        }
        point(this.x + i, this.y + j);
        strind++;
      }
    }
  }
}
