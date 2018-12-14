//acc.value.toString(2).padStart(8, '0')
class accumulator {
  constructor(pent, wheel, posX = 0, posY = 0, color = 200, value = 0) {
    this.value = value;
    this.color = color;
    this.pent = pent;
    this.wheel = wheel
    this.x = posX;
    this.y = posY;
  }

  weave() {
    var binary = this.value.toString(2).padStart(8, '0').split("").reverse();
    var temp = binary[0];
    binary[0] = binary[1];
    binary[1] = binary[3];
    binary[3] = binary[5];
    binary[5] = binary[7];
    binary[7] = binary[6];
    binary[6] = binary[4];
    binary[4] = binary[2];
    binary[2] = temp;
    binary = binary.reverse().join("");

    this.value = parseInt(binary, 2);
  }

  display() {
    push();
    noStroke();
    colorMode(HSL, 360)
    fill(this.color, 200, 200);
    rect(this.x, this.y, 50, 50);
    pop();
    push();
    textSize(18);
    textAlign(CENTER);
    text(this.value, this.x + 25, this.y + 25 + 18 / 3);
    pop();
  }

  increment() {
    this.value++;
    if (this.value > 255) {
      this.value = 0;
    }
  }

  decrement() {
    this.value--;
      if (this.value < 0) {
        this.value = 255;
      }
  }

  swapP() {
    var temp = this.value;
    this.value = this.pent.cells[this.pent.pnt].value;
    this.pent.cells[this.pent.pnt].value = temp;
    temp = this.color;
    this.color = this.pent.cells[this.pent.pnt].color;
    this.pent.cells[this.pent.pnt].color = temp;
  }

  copyP() {
    this.value = this.pent.cells[this.pent.pnt].value;
  }

  giveP() {
    this.pent.cells[this.pent.pnt].value = this.value;
  }

  swapW() {
    var temp = this.value
    this.value = this.wheel.cells[this.wheel.pnt].value;
    this.wheel.cells[this.wheel.pnt].value = temp;
    temp = this.color;
    this.color = this.wheel.cells[this.wheel.pnt].color;
    this.wheel.cells[this.wheel.pnt].color = temp;
  }

  copyW() {
    this.value = this.wheel.cells[this.wheel.pnt].value;
  }

  giveW() {
    this.wheel.cells[this.wheel.pnt].value = this.value;
  }

  empty() {
    this.value = 0;
  }
}