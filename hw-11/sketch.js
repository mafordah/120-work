
let lines = [];
let numberOfLines = 25

function setup() {
    createCanvas(windowWidth, windowHeight);
    // loop for number of lines
    for (let i = 0; i < numberOfLines; i++) {
        lines.push(new Line());
    }
}

function draw() {
    background(118, 170, 205);
    // loop for object
    for (let i = 0; i < lines.length; i++) {
        lines[i].frame();
    }
}

class Line{
    constructor(x1, y1, x2, y2){
        //define
        this.x1 = random(width);
        this.y1 = random(height);
        this.x2 = random(width);
        this.y2 = random(height);
        this.deltaX1 = random(-3, 3);
        this.deltaY1 = random(-3, 3);
        this.deltaX2 = random(-3, 3);
        this.deltaY2 = random(-3, 3);
        this.stroke = color(random(100, 255), random(100, 180), 180);
    }

    frame() {
        // call
        this.move();
        this.edgeCheck();
        this.display();

    }

    move(){
        // move lines
        this.x1 += this.deltaX1;
        this.y1 += this.deltaY1;
        this.x2 += this.deltaX2;
        this.y2 += this.deltaY2;
    }

    edgeCheck(){
        if(this.x1 >= width) {
            this.deltaX1 *= -1;
            this.x1 = width - abs(this.deltaX1);
        }else if (this.x1 <= 0) {
            this.deltaX1 *= -1;
            this.x1 = abs(this.deltaX1);
        }

        if (this.y1 >= height) {
            this.deltaY1 *= -1;
            this.y1= height - abs(this.deltaY1);
        }else if (this.y1<= 0) {
            this.deltaY1 *= -1;
            this.y1 = abs(this.deltaY1);
        }

        if (this.x2 >= width) {
            this.deltaX2 *= -1;
            this.x2 = width - abs(this.deltaX2);
        } else if (this.x2 <= 0) {
            this.deltaX2 *= -1;
            this.x2 = abs(this.deltaX2);
        }

        if (this.y2 >= height) {
            this.deltaY2 *= -1;
            this.y2= height - abs(this.deltaY2);
        } else if (this.y2<= 0) {
            this.deltaY2 *= -1;
            this.y2 = abs(this.deltaY2);
        }
    }

    display(){
        //draw lines
        stroke(this.stroke);
        strokeWeight(5);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}
