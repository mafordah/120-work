let angler = [];
let backBubbles = [];
let frontBubbles = [];
let fish = [];



function preload() {
  //preload angler sprite
    anglerSprite = loadImage('./data/anglerSprite.png');
    fishSprite = loadImage('./data/fishSprite.png');
    sand = loadImage('./data/sand.png');
}



function setup(){
  createCanvas(windowWidth, windowHeight);


  //limit fish
    fishTimer();



  //define angler
    angler[0] = new Angler();


  //limit bubbles
    frontBubbleTimer();
    backBubbleTimer();
}



function windowResized() {
  //cavas resize with window
    resizeCanvas(windowWidth, windowHeight);
}



function draw(){
    gameScreen();
}



function mousePressed(){

}



function startScreen(){
  background('rgb(246, 179, 252)');
  noCursor();
  fill('rgb(24, 14, 51)')
  textAlign(CENTER);
  text('Click To Start', width/2, height/2);
}



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
  let bb = new Bubble(random(width + 300), height * 4/5 + 20, random(5, 15));
  backBubbles.push(bb);
  setTimeout(backBubbleTimer, 25);
}



function frontBubbleTimer(){
  let fb = new Bubble(random(width + 300), height, random(15, 30));
  frontBubbles.push(fb);
  setTimeout(frontBubbleTimer, 100);
}



function fishTimer(){
  /*for(let i = 0; i < 15; i++){
    fish.push(new Fish(width, random(height/20, height * 17/20)));
  }*/
  let f = new Fish(width, random(height/20, height * 4/5));
  fish.push(f);
  setTimeout(fishTimer, random(1000, 2000));
}



class Angler{
  constructor(){
    //call sprite sheet
    this.image = anglerSprite;
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
    //define movement variables
    this.moveX;
    this.moveY;
    this.movementX;
    this.movementY;
    this.x = windowWidth/7;
    this.y = windowHeight/5;
    this.follow = 0.05;
  }


  frame(){
    //call methods in one method
    this.display();
    this.animate();
    this.move();
  }

  move(){
    this.movementX = mouseX - 100;
    this.moveX = this.movementX - this.x;
    this.x += this.moveX * this.follow;


    this.movementY = mouseY - 240;
    this.moveY = this.movementY - this.y;
    this.y += this.moveY * this.follow;
  }

  display(){
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
          this.size.w,
          this.size.h
      );
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
    this.display();
    this.animate();
  }

  move(){
    this.x -= random(1, 7);
    //this.x -=;
  }


  display(){
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


  edgeCheck(){
    if (this.x + 226 < 0){
      return true;
    } else {
      return false;
    }
  }
}
