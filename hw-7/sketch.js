

let ball = {};
  ball.width = 40;
  ball.x = 10;
  ball.y = 10;
  ball.delta_x = 1;
  ball.delta_y = 1;
  ball.scale_x = 1;
  ball.scale_y = 1;
let fillChangeR = 1;
let fillChangeB = 1;
let fillChangeG = 1;
let fillMapR = 1;
let fillMapB = 1;
let fillMapG = 1;
let xR = 0;
let yR = 255;
let xB = 0;
let yB = 255;
let xG = 0;
let yG = 255;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}


function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }

    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    fillChangeR = frameCount % 250;
    fillChangeB = frameCount % 200;
    fillChangeG = frameCount % 150;
    fillMapR = map(fillChangeR, 0, 249, xR, yR);
    fillMapB = map(fillChangeB, 0, 199, xB, yB);
    fillMapG = map(fillChangeG, 0, 149, xG, yG);

    fill(fillMapR, fillMapB, fillMapG);
    noStroke();
    ellipse(ball.x, ball.y, ball.width, ball.width);

    if(fillMapR > 254){
      xR = 255
      yR = 0
    } else if(fillMapR < 1){
      xR = 0
      yR = 255
    }

    if(fillMapB > 254){
      xB = 255
      yB = 0
    } else if(fillMapB < 1){
      xB = 0
      yB = 255
    }

    if(fillMapG > 254){
      xG = 255
      yG = 0
    } else if(fillMapG < 1){
      xG = 0
      yG = 255
    }
}


function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 20);
    ball.scale_y = map(mouseY, 0, height, 0.5, 20);
}
