let b = [];
let img;
function preload(){
    img=loadImage("cloud.png")
}
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");
    // for (let i=0; i<30; i++){
    //     b[i]=new Bubble();
    // }
}

function draw() {
    background(0,0,255);
    // for (let i=0; i <30; i++){
    //     b[i].update();
    //     b[i].display();
    //     b[i].putBack();
    // }
}
function mousePressed(){
    b.push(new Bubble (mouseX, mouseY));
}

class Bubble {
    constructor() {
        this.x = random(width)
        this.y = random(height);
        this.d = random(5, 50)
        this.speed = map(this.d, 5, 50, 3, 0.5)
        this.osc = new p5.TriOsc()
        this.envelope.setADSR(0.001,0.5,0.1,0.1)
        this.envelope.setRange(1,0);

    }
    display() {
        image(img,this.x,this.y,this.d,this.d/2)
        // fill(255,100);
        // noStroke();
        // circle(this.x, this, y, this.d);
    }
    update() {
        this.y = this.y - this.speed;
    }
    putBack(){
        if (this.y< this.d/2){
            this.y=random(height+this.d, 2 *height)
        }
    }
}