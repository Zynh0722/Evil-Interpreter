class pent {
  constructor(scale = 1, posX = length / 2, posY = width / 2) {
    this.scale = scale;
    this.centerX = posX;
    this.centerY = posY;
    this.r = 75 * this.scale;
    this.offset = getOffset(5);
    this.cells = [];
    this.fillPent();
    this.pnt = 0;
  }


  fillPent() {
    var hue = 0;
    for (var i = 5; i >= 1; i--) {
      var deg = i * this.offset;
      var ellX = this.centerX + (this.r * sin(deg + PI));
      var ellY = this.centerY + (this.r * cos(deg + PI));
      this.cells.push(new cell(ellX, ellY, hue, this.scale));
      hue += 360 / 5;
    }
  }

  display() {
    push();
    strokeWeight(4 * this.scale);
    line(this.centerX, this.centerY, this.cells[this.pnt].x, this.cells[this.pnt].y);
    pop();
    for (var i = 0; i < 5; i++) {
      this.cells[i].display();
    }
  }

  pointerInc() {
    this.cells[this.pnt].value++;
    if (this.cells[this.pnt].value > 255) {
      this.cells[this.pnt].value = 0;
    }
  }
  pointerDec() {
    this.cells[this.pnt].value--;
    if (this.cells[this.pnt].value < 0) {
      this.cells[this.pnt].value = 255;
    }
  }
  rotateCC() {
    this.pnt--;
    if (this.pnt < 0) {
      this.pnt = 4;
    }
  }
  rotateC() {
    this.pnt++;
    if (this.pnt > 4) {
      this.pnt = 0;
    }
  }
  empty() {
  	for (var i = 0; i < 5; i++) {
    	this.cells[i].empty();
    }
	}
}

function getOffset(elmts) {
  return (2 * PI) / elmts;
}