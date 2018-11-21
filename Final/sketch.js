
function preload() {
    img = loadImage('./data/background.png');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(img);
  noCursor();
  scenary();
}

function scenary(){
  //ground
  fill('rgb(46, 41, 37)');
  noStroke();
  rect(0, windowHeight * 3/4, windowWidth, windowHeight/4);
}
