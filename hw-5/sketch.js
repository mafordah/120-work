
function setup (){
  createCanvas(windowWidth, 800);
}

//define variables
let dolphinPivot = 600;
let dolphinHeight = -400
let wave1Loc = 1100
let wave2Loc = 600
let wave3Loc = 400
let wave4Loc = 900
let wave5Loc = 0

function draw (){
  //erase every frame
  background( 'rgb(241, 182, 118)' );

  // turn cursor off
  noCursor();

  // Sun
  push();

    // move center to bottom left third of screen
    translate( width/3, dolphinPivot );
    fill( 'rgb(244, 215, 102)' );
    noStroke();
    ellipse( 0, 0, 300);

  pop(); // Sun end



  // Ocean back
  push();

    // draw ocean back at dolphinPivot
    fill( 'rgb(28, 52, 126)' );
    noStroke();
    rect( 0, dolphinPivot - 20, windowWidth, dolphinPivot/2 );

  pop(); // Ocean back end



  // Dolphin 1
  push();

    // move center to bottom left third of screen
    translate( width/3, dolphinPivot );
    // rotate, based on mouseX position
    rotate( radians(mouseX) );
    fill( 'rgb(89, 109, 126)' );
    noStroke();

    //body
    ellipse( 0, dolphinHeight, 80 );
    quad(
      0,
      dolphinHeight - 40,
      0,
      dolphinHeight + 40,
      -50,
      dolphinHeight + 40,
      -50,
      dolphinHeight - 50
    );
    quad(
      -50,
      dolphinHeight + 40,
      -50,
      dolphinHeight - 50,
      -160,
      dolphinHeight + 10,
      -160,
      dolphinHeight + 50
    );
    ellipse( -160, dolphinHeight + 30, 40);

    //nose
    rotate( radians(10) );
    ellipse( -31, dolphinHeight, 80, 24 );
    ellipse( -16, dolphinHeight + 12, 40, 10);

    //back fin
    rotate( radians(10) );
    ellipse( -200, dolphinHeight, 100, 40  );

    //tail
    rotate( radians(10) );
    ellipse( -360, dolphinHeight + 160, 80, 30  );
    rotate( radians(-40) );
    ellipse( -140, dolphinHeight + 15, 80, 30  );

    //fin
    rotate( radians(-20) );
    ellipse( 100, dolphinHeight + 50, 80, 20  );

    //eye
    rotate( radians(30) );
    fill(0);
    noStroke();
    ellipse( 0, dolphinHeight, 10 );

  pop(); // Dolphin 1 end



  // Dolphin 2
  push();

    // move center to bottom left third of screen
    translate( width/3, dolphinPivot );
    // rotate, based on mouseX position
    rotate( radians(mouseX) );
    fill( 'rgb(89, 109, 126)' );
    noStroke();

    //body
    ellipse( 0, -dolphinHeight, 80 );
    quad(
      0,
      - dolphinHeight + 40,
      0,
      - dolphinHeight - 40,
      50,
      - dolphinHeight - 40,
      50,
      - dolphinHeight + 50
    );
    quad(
      50,
      - dolphinHeight - 40,
      50,
      - dolphinHeight + 50,
      160,
      - dolphinHeight - 10,
      160,
      - dolphinHeight - 50
    );
    ellipse( 160, - dolphinHeight - 30, 40);

    //nose
    rotate( radians(10) );
    ellipse( 31, - dolphinHeight, 80, 24 );
    ellipse( 16, - dolphinHeight - 12, 40, 10);

    //back fin
    rotate( radians(10) );
    ellipse( 200, - dolphinHeight, 100, 40  );

    //tail
    rotate( radians(10) );
    ellipse( 360, - dolphinHeight - 160, 80, 30  );
    rotate( radians(-40) );
    ellipse( 140, - dolphinHeight - 15, 80, 30  );

    //fin
    rotate( radians(-20) );
    ellipse( - 100, - dolphinHeight - 50, 80, 20  );

    //eye
    rotate( radians(30) );
    fill(0);
    noStroke();
    ellipse( 0, - dolphinHeight, 10 );

  pop(); // Dolphin 2 end



  // Island
  push();

    // move center to bottom left third of screen
    translate( width/3, dolphinPivot );

    //land
    fill( 'rgb(242, 219, 162)' );
    noStroke();
    ellipse( 900, 12, 600, 200);

    //palm tree
    //trunk
    fill( 'rgb(74, 63, 42)' );
    noStroke();
    quad( 830, -60, 880, -60, 850, -340, 820, -340 );
    ellipse( 855, -60, 50, 20 );
    //palms
    fill( 'rgb(51, 101, 26)' );
    triangle( 835, -340, 650, -280, 750, -400 );
    triangle( 835, -340, 720, -240, 800, -400 );
    triangle( 835, -340, 990, -240, 870, -410 );
    triangle( 835, -340, 1010, -330, 835, -410 );

  pop();



  // Ocean front
  push();

    // draw ocean at dolphinPivot
    fill( 'rgb(28, 52, 126)' );
    noStroke();
    rect( 0, dolphinPivot, windowWidth, dolphinPivot/2 );

  pop(); // Ocean front end



  // Waves
  push();

    // move center to bottom left third of screen
    translate( width/3, dolphinPivot );
    fill( 'rgb(28, 52, 126)' );
    noStroke();

    //wave 1
    push();
      triangle(
        wave1Loc + 16,
        -60,
        wave1Loc - 48,
        0,
        wave1Loc + 200,
        0
      )

      //redefine variable for movement
      wave1Loc = wave1Loc - 1
    pop();//wave 1 end
    push();
      // wave 2
      triangle(
        wave2Loc - 20,
        -65,
        wave2Loc - 48,
        0,
        wave2Loc + 200,
        0
      );

      //redefine variable for movement
      wave2Loc = wave2Loc - .7
      pop();//wave 2 end
      push();
        // wave 3
        triangle(
          wave3Loc - 10,
          -55,
          wave3Loc - 48,
          0,
          wave3Loc + 200,
          0
        );

        //redefine variable for movement
        wave3Loc = wave3Loc - 1
        pop();//wave 3 end
        push();
          // wave 4
          triangle(
            wave4Loc - 10,
            -55,
            wave4Loc - 48,
            0,
            wave4Loc + 200,
            0
          );

          //redefine variable for movement
          wave4Loc = wave4Loc - .8
        pop();//wave 4 end
        push();
          // wave 5
          triangle(
            wave5Loc - 10,
            -61,
            wave5Loc - 48,
            0,
            wave5Loc + 200,
            0
          );

          //redefine variable for movement
          wave5Loc = wave5Loc - .5
        pop();//wave 5 end

  pop(); // Waves end
}
