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
	interpreter = new interpreter(acc, main, spinny, ``, "");
  
  input = createInput();
  input.size(150);
  input.position(585, 60 - 22.5);
  
  otherInput = createInput();
  otherInput.size(150);
	otherInput.position(585, 60);
  
  slider = createSlider(0.5, 100, 1, 0.5);
  slider.position(input.x, input.y - slider.height - 5);
  slider.style('width', '170px');
  
  button = createButton('Submit');
  button.position(input.x + input.width, input.y);
  button.mousePressed(setSource);
  
}

var count = 0;

function draw() {
  background(250);
	frameRate(slider.value());
  
  push();
  textSize(13);
  text("Src:", 561, 60 + 13/3 + 22.5/2 - 22.5);
  text("In:", 570, 60 + 13/3 + 22.5/2)
  pop();
       
       
  interpreter.step();
}

function setSource() {
  interpreter.reset();
  interpreter.setIn(otherInput.value());
	interpreter.inputSrc(input.value());
  interpreter.start();
}