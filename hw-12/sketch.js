let narwhal;
let bubbles = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  let b = new Bubble(width/2, height/2, 10);
    bubbles.push(b);

}


function draw(){
  background(139, 219, 233);
  noCursor();
  //create narwhal
  narwhal = new Narwhal(mouseX, mouseY, 100, 100);
  narwhal.draw();

  //create bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].draw();
  }
  //start below the screen
  let b = new Bubble(random(width), height + 120, random(40, 120));
  bubbles.push(b);

  //if horn hit bubble, the bubble will splice
  for (let i = bubbles.length - 1; i >= 0; i--) {
    let pop = bubbles[i].hornCheck();
    if (pop) {
      bubbles.splice(i, 1);
    }
  }
}




class Narwhal{
  constructor(narX, narY, w, h){
    this.narX = narX
    this.narY = narY
    this.narW = w
    this.narH = h
  }

  draw(){
    //body
  push();
    translate(this.narX, this.narY);
    noStroke();
    fill(148, 146, 148);
    ellipse(0, 0, this.narW, this.narH);
    quad(-30, 40, 0, -50, -60, -30, -60, 0,);
    // tail
    push();
      rotate(radians(10));
      ellipse(-70, -15, this.narW - 50, this.narH - 80);
    pop();
    push();
      rotate(radians(-10));
      ellipse(-65, -20, this.narW - 50, this.narH - 80);
    pop();
    //horn
    fill(251, 252, 240);
    triangle(48, 8, 48, -8, 100, 0);
    ellipse(48, 0, this.narW - 95, this.narH - 84);
    //eye
    fill(50);
    ellipse(0, 10, 20);
    fill(220);
    ellipse(2, 12, 5);
    ellipse(-4, 8, 5);
  pop();
  }
}


class Bubble{
  constructor(x, y, d){
    this.x = x;
    this.y = y;
    this.d = d;
    this.fill = color('rgba(162, 242, 249, 0.6)');
  }

  move(){
    //move bubble
    this.x = this.x + random(-2, 2);
    //smaller bubbles move faster than bigger bubbles
    this.y = this.y - 300/this.d;
  }

  draw(){
    //draw bubble
    noStroke();
    fill(this.fill);
    ellipse(this.x, this.y, this.d);
  }

  hornCheck() {
    //check if the horn is within a bubble
    let d = dist(this.x, this.y, mouseX + 90, mouseY);
    if (d < this.d/2) {
      return true;
    } else {
      return false;
    }
  }
}
