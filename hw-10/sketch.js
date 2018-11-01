
let x = 1;
let y = 1;
let follow = 0.01;
let teeth = [20, -100, -95, -10];


function setup (){
  createCanvas(windowWidth, windowHeight);
}



function draw(){
  background('rgb(24, 14, 51)');
  noCursor();
  fish();
  anglerFish();
}



function anglerFish(){
  push();
    translate(mouseX, mouseY);
    //translate(width/2, height/2);
    noStroke();
      //mouth
      push();
      translate(50, 50);
      rotate(radians(mouseX/20));
      fill(255);
      triangle(teeth[0], teeth[1], teeth[0], teeth[2], teeth[3], teeth[1]);
      triangle(teeth[0], teeth[1]+10, teeth[0], teeth[2]+10, teeth[3]+10, teeth[1]+10);
      triangle(teeth[0], teeth[1]+20, teeth[0], teeth[2]+20, teeth[3]+20, teeth[1]+20);
      fill('rgb(192, 162, 208)');
      triangle(0, 0, 20, -100, 50, -70);
      pop();
    //body
    fill('rgb(192, 162, 208)');
    quad(-70, 20, 50, 50, 70, -50, 20, -70);
    //tail
    quad(-70, 20, -100, 30, -100, -20, -50, 0);
    //eye
    fill(0);
    ellipse(40, -40, 10);
    fill(255);
    ellipse(41, -41, 2);
    //angler
    strokeWeight(5);
    stroke('rgb(192, 162, 208)');
    noFill();
    arc(95, -70, 150, 160, PI, 1.9*PI, OPEN);
    noStroke();
    fill('rgb(240, 227, 163)');
    ellipse(167, -90, 12);
    fill('rgba(242, 250, 145, 0.1)')
    ellipse(167, -90, 70);
    ellipse(167, -90, 250);
  pop();
}



function fish(){
  //move X towards angler
  let movementX = mouseX + 167;
  //create follow lag
  let finalX = movementX - x;
  x += finalX * follow;

  //move Y toward angler
  let movementY = mouseY - 90;
  //create follow lag
  let finalY = movementY - y;
  y += finalY * follow;

  //fish
  push();
    noStroke();
    fill('rgb(255, 192, 105)');
    ellipse(x, y, 40, 20);
    triangle(x, y, x+30, y+10, x+30, y-10)

  pop();



}
