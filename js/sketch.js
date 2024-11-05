/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new PinkManDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class PinkManDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.a=0
    this.amp=25
    this.s=0.25
    this.face=0
    this.faceSpeed=0.2
    this.faceB=15
    this.leg=10
    this.eyes=0
    this.smile=0
    this.eyesSpeed=0.5
    this.smileSpeed=0.3
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.a+=this.s
    this.face+=this.faceSpeed;
    if (this.face>this.faceB || this.face < -this.faceB){
      this.faceSpeed= this.faceSpeed * -1
    }
    //legs
    this.leftLeg=20+this.leg*sin(this.a)
    this.rightLeg=20-this.leg*sin(this.a)

  //eyes and smile
  this.eyes=random(-2,2)
  this.smile=random(-1,1)
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

//head
noStroke()
fill(240, 158, 227)
push();
rotate(radians(this.face))
ellipse(0,-50,50,50)
pop();
//body
fill(240, 158, 227)
rect(-15,-30,30,60)
//eyes and smile
fill(0)
push()
translate(0,-50)
rotate(radians(this.face))
ellipse(-10,this.eyes,5,13)
ellipse(10,this.eyes,5,13)
arc(0,this.smile,10,10,0,PI)
pop()
//legs
fill(240, 158, 227)
rect(-15,this.leftLeg,10,50)
rect(5,this.rightLeg,10,50)
//arms
push()
stroke(240, 158, 227)
strokeWeight(10)
let leftArm=this.amp*sin(this.a)
let rightArm=this.amp*sin(this.a+PI)
line(-40,10+leftArm,-15,-20)
line(15,-20,40,10+rightArm)
pop()



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/