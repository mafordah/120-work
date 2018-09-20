function setup(){
  //create canvas 600px wide and 750px tall
  createCanvas(600,750);

  //define background color
  background(10,100,255,80);
}

function draw(){
  // Main sandbox
  push();

  //center grid to canvas center
  translate(300,375);

  //move drawing up to add room for feet
  translate(0,-40);

    // ---LEGS---
    push();

    // hips
    fill(40);
    noStroke();
    quad(60,0, -60,0, -70,50, 70,50);

    // right foot
    fill(120);
    noStroke();
    quad(0,350, -25,350, -35,380, 10,380)
    ellipse(-12,380, 45,20)

    // right leg
    fill(40);
    noStroke();
    quad(-70,50, 0,50, -2,200, -40,200);
    quad(-2,200, 0,350, -25,350, -40,200);

    // left foot
    fill(120);
    noStroke();
    quad(100,140, 70,140, 70,170, 110,170);
    ellipse(90,170, 40,20);

    // left leg
    fill(30);
    noStroke();
    quad(2,200, 40,200, 100,140, 70,135);
    ellipse(83,140, 30,20);
    fill(40);
    noStroke();
    quad(70,50, 0,50, 2,200, 40,200);
    ellipse(21,200, 38,20);

    pop(); // LEGS END

    // ---ARMS---
    push();

    // right hand
    fill(186,138,105);
    noStroke();
    ellipse(-175,-150, 35,35);

    // right arm
    fill(90,25,250);
    noStroke();
    quad(-80,-140, -60,-90, -130,-50, -150,-80);
    quad(-190,-140, -160,-140, -100,-80, -150,-80);

    // left hand
    fill(186,138,105);
    noStroke();
    ellipse(175,-150, 35,35);

    // left arm
    fill(90,25,250);
    noStroke();
    quad(80,-140, 60,-90, 130,-50, 150,-80);
    quad(190,-140, 160,-140, 100,-80, 150,-80);

    pop(); // ARMS END

    // ---TORSO---
    push();

    // body
    fill(90,25,250);
    noStroke();

      // upper torso
      quad(80,-140, -80,-140, -50,-40, 50,-40);

      // lower torso
      quad(-50,-40, 50,-40, 60,0, -60,0);
      ellipse(0,0, 120,30);

    // neck
    fill(177,128,88);
    noStroke();
    quad(30,-130, -30,-130, -25,-150, 25,-150);
    ellipse(0,-130, 60,20);

    pop(); // TORSO END

    // ---HEAD---
    push();

    // face
    fill(186,138,105);
    noStroke();
    ellipse(0,-200, 100,120);

    // lips
    fill(200,100,100);
    arc(0,-165, 24,20 ,0,PI, CHORD);
    arc(6,-165, 12,10, PI,0, CHORD);
    arc(-6,-165, 12,10, PI,0, CHORD);

    // nose
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(0,-180, 12,10, 0,PI);
    line(6,-180, 3,-200);

    // eyes
    fill(0);
    noStroke();
    ellipse(20,-195, 5,5);
    ellipse(-20,-195, 5,5);

    // glasses
    fill(255,80);
    stroke(2);
    rect(7,-205, 30,22, 3);
    rect(-37,-205, 30,22, 3);
    line(7,-200, -7,-200);

    // hair
    fill(0);
    noStroke();

      //right side
      ellipse(20,-250, 55,55);
      ellipse(50,-240, 40,40);
      ellipse(50,-210, 50,50);
      ellipse(60,-180, 40,40);
      ellipse(80,-190, 50,50);
      ellipse(70,-220, 50,50);
      ellipse(70,-160, 45,45);

      //left side
      ellipse(-30,-250, 50,50);
      ellipse(-55,-215, 50,50);
      ellipse(-55,-180, 40,40);
      ellipse(-70,-180, 50,50);
      ellipse(-70,-220, 50,50);
      ellipse(-50,-155, 50,50);
      ellipse(-70,-205, 40,40);
      ellipse(-55,-235, 40,40);

    pop(); // HEAD END

  pop();

}
