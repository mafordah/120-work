// ALGORITHMIC SKETCH

// Define Variables
let point = {};
  point.pos1X = 0;
  point.pos1Y = 0;
  point.pos2X;
  point.pos2Y;
let greyStroke = 1;
let colorChange = 1;
let b = 0;
let w = 255;
let mvmnt = 10


function setup() {

  frameRate(24)
  createCanvas(windowWidth, windowHeight);
  background(200);

  // Set initial position
  point.pos1Y = height/2
  point.pos1X = width/6

}


function draw() {

  // Redefine variables
  point.pos2X = width * 0.5;
  point.pos2Y = height * 0.5;
  point.pos2X = point.pos1X + sqrt(point.pos2Y)/mvmnt;
  point.pos2Y += floor(random(- height/3, height/3));

  // Draw lines that change from white to black
  noFill();
  colorChange = frameCount % 200;
  greyStroke = map(colorChange, 0, 199, w, b);

  // Color Conditions
  if(greyStroke < 1){
    b = 255
    w = 0
  } else if(greyStroke > 254){
    b = 0
    w = 255
  }

  // Draw line
  stroke(greyStroke);
  line(point.pos1X, point.pos1Y, point.pos2X, point.pos2Y);

  // Movement Conditions
  if(point.pos2X > 5/6 * width){
    mvmnt = - mvmnt
  } else if (point.pos2X < width/6){
    mvmnt = - mvmnt
  }

  // Make lines continuous
  point.pos1X = point.pos2X;
  point.pos1Y = point.pos2Y;

}
