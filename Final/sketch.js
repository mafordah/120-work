let angler;

function preload() {
    ocean = loadImage('./data/background.png');
    ground = loadImage('./data/ground.png');
    depth = loadImage('./data/depth.png');
    anglerSprite = loadImage('./data/anglerSprite.png')
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  angler = new Angler();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(ocean);
//  noCursor();
  scenary();
  angler.frame();

}

function scenary(){
  //ground
  image(ground, 0, 0, windowWidth, windowHeight);
  //ocean depth
  image(depth, 0, 0, windowWidth, windowHeight);
}

class Angler{
  contructor(){
    this.xPos = 500;
    this.yPos = 400;
    this.image = anglerSprite;
    this.speed = 4;
    this.width = 672;
    this.height = 480;
    this.spriteFrame = 0
    this.subRect = [
      [0, 0],
      [672, 0],
      [0, 480],
      [672, 480],
      [0, 960],
      [672, 960],
    ];
  }

  frame(){
    this.display();
    this.animate();
  }

  display(){
    push();
      translate(this.xPos, this.yPos);

      image(
        this.image,
        0,
        0,
        this.width,
        this.height,
        this.subRect[this.spriteFrame][0],
        this.subrect[this.spriteFrame][1],
        this.width,
        this.height,
      );

    pop();
  }

  move(){

  }

  animate(){
    if (frameCount % this.speed === 0) {
      this.spriteFrame++;
      this.spriteFrame %= 8;
    }
  }

}
