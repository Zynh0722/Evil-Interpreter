class wheel {
  constructor(scale = 1, posX = length / 2, posY = width / 2) {
    this.scale = scale;
    this.centerX = posX;
    this.centerY = posY;
    this.r = 75 * this.scale;
    this.cells = [];
    this.cellsAmount = 0;
    this.pnt = 0;
  }

  display() {
    if (this.cellsAmount == 0) {
      return;
    }
    push();
    strokeWeight(4 * this.scale);
    line(this.centerX, this.centerY, this.cells[this.pnt].x, this.cells[this.pnt].y);
    pop();
    for (var i = 0; i < this.cellsAmount; i++) {
      this.cells[i].display();
    }
  }

  addCell() {
    var hue = Math.floor(Math.random() * 360);

    this.cellsAmount++;
    this.cells.splice(this.pnt, 0, new cell(0, 0, hue, this.scale));
    this.reposition();
  }

  deleteCell() {
    this.cellsAmount--;
    this.cells.splice(this.pnt, 1);
    this.reposition();
  }

  reposition() {
    var offset = getOffset(this.cellsAmount);
    if (this.cellsAmount > 8) {
      this.r += this.cellsAmount - 2;
    }

    for (var i = this.cellsAmount - 1; i >= 0; i--) {
      var deg = (this.cellsAmount - i) * offset;
      this.cells[i].x = this.centerX + (this.r * sin(deg + PI));
      this.cells[i].y = this.centerY + (this.r * cos(deg + PI));
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
      this.pnt = this.cellsAmount - 1;
    }
  }
  rotateC() {
    this.pnt++;
    if (this.pnt > this.cellsAmount - 1) {
      this.pnt = 0;
    }
  }
  empty() {
    if (this.cellsAmount == 0) {
      return;
    } else {
      for (var i = 0; i <= this.cellsAmount + 1; i++) {
        this.deleteCell();
      }
    }

  }
}

function getOffset(elmts) {
  return (2 * PI) / elmts;
}