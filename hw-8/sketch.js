let headAngle = 1;
let headMap = 1;
let angleX = 80;
let angleY = -10;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  //center at half height and third width
  translate(width/3, height/2);
  //turn cursor off
  noCursor();

  //unicorn
  push();

    //head
    push();

      //rotate with mouseY
      headMap = -mouseY % height;
      headAngle = map(headMap, 0, -height, angleX, angleY);

      //adjust rotation for laser
      rotate(radians(100));
      rotate(radians(-headAngle));
      background(180, 165, 187);

      push();

        //adjust head position
        translate(70, 0);
        noStroke();
        //neck
        fill(30);
        triangle(-10, -100, 70, -100, 20, -140);
        triangle(-70, 0, 60, 0, -10, -100);
        fill(20);
        triangle(60, 0, -10, -100, 70, -100);
        triangle(-70, 0, 60, 0, -35, 120);

        //eye
        fill(0);
        triangle(20, -140, 70, -100, 100, -140);
        fill(30);
        triangle(20, -140, 60, -160, 100, -140);

        //ear back
        fill(0);
        triangle(90, -140, 60, -160, 95, -190);

        //horn
        fill(255);
        quad(80, -150, 60, -160, 62, -170, 80, -170);
        fill(240);
        quad(78, -170, 62, -170, 64, -195, 78, -195);
        fill(225);
        quad(76, -195, 64, -195, 66, -220, 76, -220);
        fill(210);
        quad(74, -220, 66, -220, 68, -250, 74, -250);

        //ear front
        fill(20);
        triangle(20, -140, 60, -160, 10, -190);

        //snout
        fill(30);
        triangle(160, -100, 70, -100, 100, -140);
        fill(20);
        triangle(160, -130, 60, -160, 160, -90);
        fill(0);
        triangle(160, -100, 70, -100, 140, -80);

      pop();

    pop();//head end

    //body
    push();

      noStroke();
      //adjust for head
      translate(30, 0);

      //tail
      fill(215);
      triangle(-380, -50, -360, 40, -300, -50)
      fill(230);
      triangle(-300, -100, -380, -50, -280, -30);
      fill(255);
      triangle(-280, 15, -240, -50, -300, -100);

      //torso
      fill(20);
      quad(-210, -40, -20, 0, -40, 140, -250, 70);

      //front leg
      fill(255);
      triangle(10, 348, -40, 348, -10, 330);
      fill(30);
      triangle(-100, 0, 0, 330, -50, 350);
      fill(20);
      quad(-20, 0, 20, 90, -40, 200, -100, 0);

      //back leg
      fill(255);
      quad(-240, 348, -290, 348, -290, 330, -260, 330);
      fill(20);
      triangle(-220, 100, -250, 330, -320, 340);
      fill(30);
      quad(-210, -40, -210, 80, -270, 220, -310, 30);

    pop();//body end

  pop();//unicorn end

  //laser
  push();

  //triggered by mouseIsPressed
  if(mouseIsPressed){
    //match head rotation
    headMap = -mouseY % height;
    headAngle = map(headMap, 0, -height, angleX, angleY);

    rotate(radians(-headAngle));

    push();//loop

    //adjust rotation for loop
    rotate(radians(10))
    //adjust for head position change
    translate(0, 70);
    //loop for laser
    let y = 68;
    for(let x = 250; x < width; x += 30) {
      noStroke();
      fill(180, random(150, 255), 255);
      rect(x, y, x/50, x/50);
    }

    pop();//loop end

  }

  pop();//laser end

}
