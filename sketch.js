let length = 800;
let width = 800;

var pentX = length / 2;
var pentY = width / 2;
var delay = 0;

function setup() {

  angleMode(RADIANS);
  createCanvas(length, width);

  frameRate(10);

  spinny = new wheel();
  main = new pent(1, 110, 175);
  acc = new accumulator(main, spinny, 10, 10);
	interpreter = new interpreter(acc, main, spinny, ``, "Hello");
  
  input = createInput();
  input.size(150);
  input.position(565, 60 - 22.5);
  
  slider = createSlider(0.5, 100, 1, 0.5);
  slider.position(input.x, input.y - slider.height - 5);
  slider.style('width', '170px');
  
  button = createButton('submit');
  button.position(input.x + input.width, input.y);
  button.mousePressed(setInput);

}

var count = 0;

function draw() {
  background(250);
	frameRate(slider.value());
  
  interpreter.step();
}

function setInput() {
  interpreter.reset();
	interpreter.inputSrc(input.value());
  interpreter.start();
}