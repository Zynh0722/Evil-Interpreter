class interpreter {
  constructor(accumulator, pent, wheel, code, input) {
    this.acc = accumulator;
    this.pent = pent;
    this.wheel = wheel;
    this.delay = 500;
    this.inputSrc(code);
    this.srcPnt = 0;
    this.setIn(input);
    this.inPnt = 0;
    this.out = "";
    this.altMarkMode = false;
    this.enabled = false;
  }

  step() {
    if (this.source[this.srcPnt] && this.enabled) {
      this[this.source[this.srcPnt]]();

      this.srcPnt++;
    }

    this.acc.display();
    this.wheel.display();
    this.pent.display();
    this.displayOut();
  }

  displayOut() {
    push();
    noStroke();
    fill(200);
    rect(this.acc.x + 50, this.acc.y, 500, 50);
    pop();

    push();
    textSize(18);
    text(this.out, this.acc.x + 75, this.acc.y + 25 + 18 / 3);
    pop();
  }

  start() {
    this.enabled = true;
  }

  stop() {
    this.enabled = false;
  }

  reset() {
    this.stop();
    this.srcPnt = 0;
    this.out = "";
    this.inPnt = 0;
    this.acc.empty();
    this.pent.empty();
    this.wheel.empty();
  }

  inputSrc(cd) {
    this.source = cd.replace(/[^a-z]/g, '').split('');
    console.log(this.source);
  }

  setIn(thingy){
  	this.in = thingy.toString();
    console.log(this.in);
  }
  
  a() {
    this.acc.increment();
  }

  b() {
    var marker = false;
    var start = this.srcPnt;
    while (!marker) {
      this.srcPnt--;
      if (this.srcPnt == 0) {
        console.log("ERROR: src[" + start + "] found no marker");
        this.srcPnt = this.source.length;
        return;
      }
      var currentCell = this.source[this.srcPnt];
      if (this.altMarkMode) {
        marker = (currentCell == "j") ? true : false;
      } else {
        marker = (currentCell == "m") ? true : false;
      }
    }
  }

  c() {
    this.wheel.addCell();
  }

  d() {
    this.wheel.deleteCell();
  }

  e() {
    this.acc.weave();
  }

  f() {
    var marker = false;
    var start = this.srcPnt;
    while (!marker) {
      this.srcPnt++;
      if (this.srcPnt == this.source.length) {
        console.log("ERROR: src[" + start + "] found no marker");
        return;
      }
      var currentCell = this.source[this.srcPnt];
      if (this.altMarkMode) {
        marker = (currentCell == "j") ? true : false;
      } else {
        marker = (currentCell == "m") ? true : false;
      }
    }
  }

  g() {
    this.acc.copyP();
  }

  h() {
    this.pent.rotateC();
  }

  i() {
    this.wheel.rotateC();
  }

  j() {
    console.log("Alternate Marker at pos: " + this.srcPnt);
  }

  k() {
    this.pent.giveP();
  }

  l() {
    this.acc.swapW();
  }

  m() {
    console.log("Standard Marker at pos: " + this.srcPnt);
  }

  n() {
    this.pent.rotateCC();
  }

  o() {
    this.wheel.rotateCC();
  }

  p() {
    this.acc.copyW();
  }

  q() {
    console.log("Funny Joke Mr. Tester man....");
  }

  r() {
    if (this.inPnt < this.in.length) {
      this.acc.value = this.in.charAt(this.inPnt).charCodeAt(0);
      this.inPnt++;
    } else {
      console.log("'r' command with no inputs left");
    }

  }

  s() {
    if (this.acc.value == 0) {
      this.srcPnt++;
    }
  }

  t() {
    if (this.acc.value != 0) {
      this.srcPnt++;
    }
  }

  u() {
    this.acc.decrement();
  }

  v() {
    this.acc.swapP();
  }

  w() {
    this.out += String.fromCharCode(this.acc.value);
  }

  x() {
    this.altMarkMode = (this.altMarkMode) ? false : true;
  }

  y() {
    this.acc.giveW();
  }

  z() {
    this.acc.empty();
  }

}