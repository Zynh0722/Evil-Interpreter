class cell {
  constructor(posX = length / 2, posY = height / 2, color = 200, scale = 1) {
    this.scale = scale;
    this.x = posX;
    this.y = posY;
    this.size = 50
    this.value = 0;
    this.color = color
  }

  display() {
    var fontSize = 18 * this.scale;
    push();
    noStroke();
    colorMode(HSL, 360);
    fill(this.color, 200, 200);
    ellipse(this.x, this.y, this.size * this.scale, this.size * this.scale);
    pop();
    push();
    textAlign(CENTER);
    textSize(fontSize);
    text(this.value, this.x, this.y + fontSize / 3);
    pop();

  }

  empty() {
    this.value = 0;
  }
}