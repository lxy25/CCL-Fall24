// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 10; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(200, 300));
  }
}

function draw() {
  background(0);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = 30;
    this.h=20;

    this.state = "line"; 
    this.angle = 0;
    this.ovalRadiusX = 100;
    this.ovalRadiusY = 50;
    this.ovalCenterX = width / 2;
    this.ovalCenterY = height / 2;
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    fill(250, 175, 220);
    ellipse (0,0,this.dia,this.h)
    pop();
  }

   // methods (functions): particle's behaviors
   update() {
    if (this.state == "line") {
      this.x += 2;
      if (this.x > width / 2) { 
        this.state = "oval";
      }
    }
    else if (this.state == "oval") {
      this.x = this.ovalCenterX + this.ovalRadiusX * cos(this.angle) 
      this.y = this.ovalCenterY + this.ovalRadiusY * sin(this.angle)
      this.angle += 0.05; 
    
      if (this.angle > TWO_PI) {
        this.state = "offCanvas"
        this.angle = 0
      }
    }
    else if (this.state == "offCanvas") {
      this.x += 4 
      this.y += 2 
    
      if (this.x > width) { 
        this.state = "line"
        this.x = random(-200, 0)
        this.y = random(200, 300)
      }
    }
    

  }
}
