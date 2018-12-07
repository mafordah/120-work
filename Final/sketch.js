let screen = 0;
let running = true;
let angler = [];
let backBubbles = [];
let frontBubbles = [];
let fish = [];
let angX = 50;
let angY = -70;
let health = 200;
let constHealth;
let hunger;
let score = 0;
let gameMusic;
let menuMusic;
let music;
let eatSound;
let splashSound;




function preload() {
  //preload angler sprite
    anglerSprite = loadImage('./data/anglerSprite.png');
    anglerEatSprite = loadImage('./data/anglerEatSprite.png');
    fishSprite = loadImage('./data/fishSprite.png');
    sand = loadImage('./data/sand.png');
    music = loadSound('./data/Ambler.mp3');
    eatSound = loadSound('./data/waterSound.mp3');
    splashSound = loadSound('./data/splashSound.mp3');
    bubbleSound = loadSound('./data/bubbleSound.mp3')
}



function setup(){
  createCanvas(windowWidth, windowHeight);
  music.setVolume(0.1);
  music.loop();

  //limit fish
    fishTimer();

  //define angler
    angler[0] = new Angler(angX, angY);

  //limit bubbles
    frontBubbleTimer();
    backBubbleTimer();
}



function windowResized() {
  //cavas resize with window
    resizeCanvas(windowWidth, windowHeight);
}



function draw(){
  if (screen == 0){
    //menu
    startScreen();
  } else if (screen == 1){
    //game
    gameScreen();
  } else if (screen == 2){
    //paused
    pauseScreen();
  } else if (screen == 3){
    //game over
    gameOverScreen();
  }
}


//Play the game
function mousePressed(){
  if (screen == 0){
    //play game
    screen = 1;
    splashSound.play();
  } else if (
    //check if game paused and mouse in button
    screen == 3 &&
    mouseX >= width/2 - 95 &&
    mouseX <= width/2 - 15 &&
    mouseY >= height * 3/5 - 35 &&
    mouseY <= height * 3/5 + 15
  ){
    //play again from game over
    health = 200;
    score = 0;
    screen = 1;
    splashSound.play();
  } else if (
    //check if game pause and mouse in button
    screen == 3 &&
    mouseX >= width/2 + 15 &&
    mouseX <= width/2 + 95 &&
    mouseY >= height * 3/5 - 35 &&
    mouseY <= height * 3/5 + 15
  ){
    //return to menu from game over
    health = 200;
    score = 0;
    screen = 0;
    splashSound.play();
  } else if (
    //check if paused and mouse in button
    screen == 2 &&
    mouseX >= width/2 - 95 &&
    mouseX <= width/2 - 15 &&
    mouseY >= height * 3/5 - 35 &&
    mouseY <= height * 3/5 + 15
  ){
    //keep playing from pause
    health = health;
    score = score;
    screen = 1;
    splashSound.play();
  } else if (
    //check if paused and mouse in button
    screen == 2 &&
    mouseX >= width/2 + 15 &&
    mouseX <= width/2 + 95 &&
    mouseY >= height * 3/5 - 35 &&
    mouseY <= height * 3/5 + 15
  ){
    //gameover from pause
    health = 200;
    score = score;
    screen = 3;
    bubbleSound.play();
  }
}



function keyTyped(){
  //pause with 'p'
  if (key === 'p' && screen == 1){
    screen = 2;
    splashSound.play();
  }

  //Stops default browser function if it has one
  return false;
}



//Start Menu
function startScreen(){
  background('rgb(24, 14, 51)');
  noCursor();

  //back bubbles
    //create back bubbles
    for(let i = 0; i < backBubbles.length; i++){
      backBubbles[i].move();
      backBubbles[i].draw();
    }
    //if back bubble hits edge, the bubble will splice
    for(let i = backBubbles.length - 1; i >= 0; i--){
      let pop = backBubbles[i].edgeCheck();
      if(pop){
        backBubbles.splice(i, 1);
      }
    }

  //draw scenery
    scenery();

  //draw fish
    for(let i = 0; i < fish.length; i++){
      fish[i].frame();
    }

  //draw angler
    for(let i = 0; i < 1; i++){
      angler[i].draw();
      angler[i].animate();
    }

  //front bubbles
    //create front bubbles
      for(let i = 0; i < frontBubbles.length; i++){
        frontBubbles[i].move();
        frontBubbles[i].draw();
      }
    //if front bubble hits edge, the bubble will splice
      for(let i = frontBubbles.length - 1; i >= 0; i--){
        let pop = frontBubbles[i].edgeCheck();
        if(pop){
          frontBubbles.splice(i, 1);
        }
      }

  //fish end
    for(let i = fish.length - 1; i >= 0; i--){
      let end = fish[i].edgeCheck();
      if (end) {
        fish.splice(i, 1);
      }
    }

  //front ground
    fill('rgb(177, 173, 144)');
    noStroke();
    rect(0, height * 19/20, width, height/20);
    //sand
    image(sand, 0, windowHeight * 1/5, windowWidth, windowHeight * 9/10);

  //Menu
    fill(255);
    rect(width/2 - width/4, height/3, width/2, height/3, 20);
    fill('rgb(24, 14, 51)');
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    text('Stear the angler fish with the mouse', width/2, height/2 - 40);
    text('Click on fish to eat', width/2, height/2 - 20);
    text("Don't go hungry!", width/2, height/2);
    textStyle(ITALIC);
    text("Press 'p' to Pause", width/2, height * 3/5 + 30)
    fill('rgb(236, 111, 182)');
    textSize(32);
    textStyle(BOLD);
    text('Click to Start', width/2, height * 3/5);

  //mouse
    fill('rgb(247, 221, 92)');
    ellipse(mouseX, mouseY, 10);
    fill('rgba(247, 221, 92, 0.1)');
    ellipse(mouseX, mouseY, 40);
}



//game
function gameScreen(){
  background('rgb(24, 14, 51)');
  noCursor();

  //back bubbles
    //create back bubbles
    for(let i = 0; i < backBubbles.length; i++){
      backBubbles[i].move();
      backBubbles[i].draw();
    }
    //if back bubble hits edge, the bubble will splice
    for(let i = backBubbles.length - 1; i >= 0; i--){
      let pop = backBubbles[i].edgeCheck();
      if(pop){
        backBubbles.splice(i, 1);
      }
    }

  //draw scenery
    scenery();

  //draw fish
    for(let i = 0; i < fish.length; i++){
      fish[i].frame();
    }

  //draw angler
    for(let i = 0; i < 1; i++){
      angler[i].frame();
    }

  //front bubbles
    //create front bubbles
      for(let i = 0; i < frontBubbles.length; i++){
        frontBubbles[i].move();
        frontBubbles[i].draw();
      }
    //if front bubble hits edge, the bubble will splice
      for(let i = frontBubbles.length - 1; i >= 0; i--){
        let pop = frontBubbles[i].edgeCheck();
        if(pop){
          frontBubbles.splice(i, 1);
        }
      }

  //fish end
    for(let i = fish.length - 1; i >= 0; i--){
      let end = fish[i].edgeCheck();
      //fish eaten
      let eaten = fish[i].eaten();
      if (end || eaten) {
        fish.splice(i, 1);
      }
      if (eaten) {
        health += 20;
        score += 1;
        eatSound.setVolume(0.1);
        eatSound.play();
      }
    }

  //score
    fill('rgb(236, 111, 182)');
    textSize(48);
    textStyle(BOLD);
    text(score, width/5, height/12);

  //healthBar
    let hunger = 0.25;
    health = health - hunger;
    let constHealth = constrain(health, 0, 200);
    //draw
      fill(255);
      rect(width/2 - 100, height/20, 210, 20, 10);
      fill('rgb(236, 111, 182)');
      rect(width/2 - 95, height/18, constHealth, 12, 8);
    //die
      if (health <= 0){
        screen = 3;
        bubbleSound.play();
      }

  //pause reminder
    fill('rgb(236, 111, 182)');
    textSize(12);
    textStyle(NORMAL);
    text("Press 'p' to Pause", width - 80, 30),

  //front ground
    fill('rgb(177, 173, 144)');
    noStroke();
    rect(0, height * 19/20, width, height/20);
    //sand
    image(sand, 0, windowHeight * 1/5, windowWidth, windowHeight * 9/10);
}



//pause
function pauseScreen(){
  background('rgb(24, 14, 51)');
  noCursor();

  //back bubbles
    //create back bubbles
    for(let i = 0; i < backBubbles.length; i++){
      backBubbles[i].move();
      backBubbles[i].draw();
    }
    //if back bubble hits edge, the bubble will splice
    for(let i = backBubbles.length - 1; i >= 0; i--){
      let pop = backBubbles[i].edgeCheck();
      if(pop){
        backBubbles.splice(i, 1);
      }
    }

  //draw scenery
    scenery();

  //draw fish
    for(let i = 0; i < fish.length; i++){
      fish[i].frame();
    }

  //draw angler
    for(let i = 0; i < 1; i++){
      angler[i].draw();
      angler[i].animate();
    }

  //front bubbles
    //create front bubbles
      for(let i = 0; i < frontBubbles.length; i++){
        frontBubbles[i].move();
        frontBubbles[i].draw();
      }
    //if front bubble hits edge, the bubble will splice
      for(let i = frontBubbles.length - 1; i >= 0; i--){
        let pop = frontBubbles[i].edgeCheck();
        if(pop){
          frontBubbles.splice(i, 1);
        }
      }

  //fish end
    for(let i = fish.length - 1; i >= 0; i--){
      let end = fish[i].edgeCheck();
      if (end) {
        fish.splice(i, 1);
      }
    }

  //score
    fill('rgb(236, 111, 182)');
    textSize(48);
    textStyle(BOLD);
    text(score, width/5, height/12);

  //healthBar
    let hunger = 0;
    health = health - hunger;
    let constHealth = constrain(health, 0, 200);
    //draw
      fill(255);
      rect(width/2 - 100, height/20, 210, 20, 10);
      fill('rgb(236, 111, 182)');
      rect(width/2 - 95, height/18, constHealth, 12, 8);

  //front ground
    fill('rgb(177, 173, 144)');
    noStroke();
    rect(0, height * 19/20, width, height/20);
    //sand
    image(sand, 0, windowHeight * 1/5, windowWidth, windowHeight * 9/10);

  //Menu
    fill(255);
    rect(width/2 - width/4, height/3, width/2, height/3, 20);
    //text
      fill('rgb(24, 14, 51)');
      textAlign(CENTER);
      textSize(16);
      textStyle(BOLD);
      text("Keep Playing?", width/2, height/2);
      fill('rgb(236, 111, 182)');
      textSize(48);
      textStyle(BOLD);
      text('Paused', width/2, height/2 - 40);
    //yes
      if (
        //check if mouse in bounds
        mouseX >= width/2 - 95 &&
        mouseX <= width/2 - 15 &&
        mouseY >= height * 3/5 - 35 &&
        mouseY <= height * 3/5 + 15
      ){
        fill('rgb(246, 176, 216)');
        rect(width/2 - 95, height * 3/5 - 35, 80, 50, 10);
        fill('rgb(236, 111, 182)');
        textSize(32);
        textStyle(BOLD);
        text('Yes', width/2 - 55, height * 3/5);
      } else {
        fill('rgb(236, 111, 182)');
        rect(width/2 - 95, height * 3/5 - 35, 80, 50, 10);
        fill(255);
        textSize(32);
        textStyle(BOLD);
        text('Yes', width/2 - 55, height * 3/5);
      }
    //no
      if (
        //check if mouse in bounds
        mouseX >= width/2 + 15 &&
        mouseX <= width/2 + 95 &&
        mouseY >= height * 3/5 - 35 &&
        mouseY <= height * 3/5 + 15
      ){
        fill('rgb(246, 176, 216)');
        rect(width/2 + 15, height * 3/5 - 35, 80, 50, 10);
        fill('rgb(236, 111, 182)');
        textSize(32);
        textStyle(BOLD);
        text('No', width/2 + 55, height * 3/5);
      } else {
        fill('rgb(236, 111, 182)');
        rect(width/2 + 15, height * 3/5 - 35, 80, 50, 10);
        fill(255);
        textSize(32);
        textStyle(BOLD);
        text('No', width/2 + 55, height * 3/5);
      }

  //mouse
    fill('rgb(247, 221, 92)');
    ellipse(mouseX, mouseY, 10);
    fill('rgba(247, 221, 92, 0.1)');
    ellipse(mouseX, mouseY, 40);
}



//game over
function gameOverScreen(){
  background('rgb(24, 14, 51)');
  noCursor();

  //back bubbles
    //create back bubbles
    for(let i = 0; i < backBubbles.length; i++){
      backBubbles[i].move();
      backBubbles[i].draw();
    }
    //if back bubble hits edge, the bubble will splice
    for(let i = backBubbles.length - 1; i >= 0; i--){
      let pop = backBubbles[i].edgeCheck();
      if(pop){
        backBubbles.splice(i, 1);
      }
    }

  //draw scenery
    scenery();

  //draw fish
    for(let i = 0; i < fish.length; i++){
      fish[i].frame();
    }

  //draw angler
    for(let i = 0; i < 1; i++){
      angler[i].draw();
      angler[i].animate();
    }

  //front bubbles
    //create front bubbles
      for(let i = 0; i < frontBubbles.length; i++){
        frontBubbles[i].move();
        frontBubbles[i].draw();
      }
    //if front bubble hits edge, the bubble will splice
      for(let i = frontBubbles.length - 1; i >= 0; i--){
        let pop = frontBubbles[i].edgeCheck();
        if(pop){
          frontBubbles.splice(i, 1);
        }
      }

  //fish end
    for(let i = fish.length - 1; i >= 0; i--){
      let end = fish[i].edgeCheck();
      if (end) {
        fish.splice(i, 1);
      }
    }

  //front ground
    fill('rgb(177, 173, 144)');
    noStroke();
    rect(0, height * 19/20, width, height/20);
    //sand
    image(sand, 0, windowHeight * 1/5, windowWidth, windowHeight * 9/10);

  //Menu
    fill(255);
    rect(width/2 - width/4, height/3, width/2, height/3, 20);
    //text
      fill('rgb(236, 111, 182)');
      textSize(80);
      textStyle(BOLD);
      text(score, width/2, height/4);
      fill('rgb(24, 14, 51)');
      textAlign(CENTER);
      textSize(16);
      textStyle(BOLD);
      text("Play Again?", width/2, height/2);
      fill('rgb(236, 111, 182)');
      textSize(48);
      textStyle(BOLD);
      text('Game Over', width/2, height/2 - 40);
    //yes
      if (
        //check if mouse in bounds
        mouseX >= width/2 - 95 &&
        mouseX <= width/2 - 15 &&
        mouseY >= height * 3/5 - 35 &&
        mouseY <= height * 3/5 + 15
      ){
        fill('rgb(246, 176, 216)');
        rect(width/2 - 95, height * 3/5 - 35, 80, 50, 10);
        fill('rgb(236, 111, 182)');
        textSize(32);
        textStyle(BOLD);
        text('Yes', width/2 - 55, height * 3/5);
      } else {
        fill('rgb(236, 111, 182)');
        rect(width/2 - 95, height * 3/5 - 35, 80, 50, 10);
        fill(255);
        textSize(32);
        textStyle(BOLD);
        text('Yes', width/2 - 55, height * 3/5);
      }
    //no
      if (
        //check if mouse in bounds
        mouseX >= width/2 + 15 &&
        mouseX <= width/2 + 95 &&
        mouseY >= height * 3/5 - 35 &&
        mouseY <= height * 3/5 + 15
      ){
        fill('rgb(246, 176, 216)');
        rect(width/2 + 15, height * 3/5 - 35, 80, 50, 10);
        fill('rgb(236, 111, 182)');
        textSize(32);
        textStyle(BOLD);
        text('No', width/2 + 55, height * 3/5);
      } else {
        fill('rgb(236, 111, 182)');
        rect(width/2 + 15, height * 3/5 - 35, 80, 50, 10);
        fill(255);
        textSize(32);
        textStyle(BOLD);
        text('No', width/2 + 55, height * 3/5);
      }

  //mouse
    fill('rgb(247, 221, 92)');
    ellipse(mouseX, mouseY, 10);
    fill('rgba(247, 221, 92, 0.1)');
    ellipse(mouseX, mouseY, 40);
}



function scenery(){
  //back ground
    fill('rgb(177, 173, 144)');
    noStroke();
    rect(0, height * 4/5, width, height/5);
    //sand
    image(sand, 0, 0, windowWidth, windowHeight);
}



function backBubbleTimer(){
  //add more bubbles over time
  let bb = new Bubble(random(width + 300), height * 4/5 + 20, random(5, 15));
  backBubbles.push(bb);
  setTimeout(backBubbleTimer, 25);
}



function frontBubbleTimer(){
  //add more bubbles over time
  let fb = new Bubble(random(width + 300), height, random(15, 30));
  frontBubbles.push(fb);
  setTimeout(frontBubbleTimer, 100);
}



function fishTimer(){
  //add more fish over time
  let f = new Fish(width, random(height/20, height * 4/5));
  fish.push(f);
  setTimeout(fishTimer, random(500, 2000));
}



class Angler{
  constructor(x, y){
    //call sprite sheet
    this.image = anglerSprite;
    this.eat = anglerEatSprite;
    //set frame speed
    this.speed = 6;
    //define sprite size
    this.size = {
      w: 504,
      h: 360
    };
    //define current sprite frame
    this.spriteFrame = 0
    this.subRect = [
      [0, 0],
      [504, 0],
      [0, 360],
      [504, 360],
      [0, 720],
      [504, 720],
    ];
    //define eat sprite frame
    this.eatFrame = 0
    this.eatSubRect = [
      [0, 0],
      [504, 0],
      [0, 360],
      [504,360],
      [0, 720],
      [504, 720],
      [0, 1080],
      [504, 1080]
    ];
    //define movement variables
    this.moveX;
    this.moveY;
    this.movementX;
    this.movementY;
  //  this.x = x;
  //  this.y = y;
    this.follow = 0.05;
  }

  frame(){
    //call methods in one method
    this.draw();
    this.animate();
    this.move();
  }

  move(){
    if (mouseIsPressed){
      //angler can't move if eating
      angX = angX;
      angY = angY;
    } else {
      //x value
      this.movementX = mouseX - 100;
      this.moveX = this.movementX - angX;
      angX += this.moveX * this.follow;
      //y value
      this.movementY = mouseY - 240;
      this.moveY = this.movementY - angY;
      angY += this.moveY * this.follow;
    }
  }

  draw(){
    push();
      //move with mouse at center of angler fish
      translate(angX, angY);

      //change animation if eating
      if (mouseIsPressed && screen == 1){
        image(
          //call eat sprite sheet
          this.eat,
          //location is translate
          0,
          0,
          //image size
          this.size.w,
          this.size.h,
          //define intial subRect postion
          this.eatSubRect[this.spriteFrame][0],
          this.eatSubRect[this.spriteFrame][1],
          //subRect size
          this.size.w,
          this.size.h
        );
      } else {
        image(
            //call sprite sheet
            this.image,
            //location is translate
            0,
            0,
            //image size
            this.size.w,
            this.size.h,
            //define intial subRect postion
            this.subRect[this.spriteFrame][0],
            this.subRect[this.spriteFrame][1],
            //subRect size
            this.size.w,
            this.size.h
        );
      }

    pop();
  }

  animate(){
    // change subRect postion over time
    if (frameCount % this.speed === 0) {
      this.spriteFrame++;
      this.spriteFrame %= 6;
    }
  }
}



class Bubble{
  constructor(x, y, d){
    this.x = x;
    this.y = y;
    this.d = d;
    this.fill = color('rgba(162, 242, 249, 0.2)');
  }

  move(){
    //smaller bubbles move slower to create depth
    this.x -= this.d/3
    this.y -= this.d/3
  }

  draw(){
    //draw bubble
      noStroke();
      fill(this.fill);
      ellipse(this.x, this.y, this.d);
  }

  edgeCheck(){
    //pop bubble if it reaches the edge of the screen
    if (this.x + this.d < 0 || this.y + this.d < 0){
      return true;
    } else {
      return false;
    }
  }
}



class Fish{
  constructor(x, y){
    this.x = x;
    this.y = y;
    //call sprite sheet
    this.image = fishSprite;
    //set frame speed
    this.speed = 3;
    //define sprite size
    this.size = {
      w: 113,
      h: 72
    };
    //define current sprite frame
    this.spriteFrame = 0
    this.subRect = [
      [0, 0],
      [216, 0],
      [0, 144],
      [216, 144],
    ];
  }

  frame(){
    this.move();
    this.draw();
    this.animate();
  }

  move(){
    //move across the screen at different speeds based on score
    if(score < 5){
      this.x -= 3;
    } else if(score < 10){
      this.x -= 4;
    } else if(score < 25){
      this.x -= 5;
    } else if (score < 50){
      this.x -= 6;
    } else if(score < 100){
      this.x -= 8;
    } else if(score < 250){
      this.x -= 10;
    } else if(score < 500){
      this.x -= 12;
    } else {
      this.x -= 15;
    }
  }

  draw(){
    push();
      //move with mouse at center of angler fish
      translate(this.x, this.y);


      image(
          //call sprite sheet
          this.image,
          //location is translate
          0,
          0,
          //image size
          this.size.w,
          this.size.h,
          //define intial subRect postion
          this.subRect[this.spriteFrame][0],
          this.subRect[this.spriteFrame][1],
          //subRect size
          226,
          144
      );
    pop();
  }

  animate(){
    // change subRect postion over time
    if (frameCount % this.speed === 0) {
      this.spriteFrame++;
      this.spriteFrame %= 4;
    }
  }

  eaten(){
    //check if head of fish is intersecting and mouse pressed (hit box)
    if(
      this.x + 66 >= angX + 100 &&
      this.x + 20 <= angX + 150 &&
      this.y + 72 >= angY + 230 &&
      this.y <= angY + 250 &&
      mouseIsPressed
    ){
      return true;
    } else {
      return false;
    }
  }

  edgeCheck(){
    //check if outside of window
    if (this.x + 226 < 0){
      return true;
    } else {
      return false;
    }
  }
}
