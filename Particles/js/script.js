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
    // this.x = this.x +10
    if (this.state == "line") {
      this.x += 2; // Move horizontally to the right
      if (this.x > width / 2) { // Transition to 'oval' state after crossing the screen center
        this.state = "oval";
      }
    }
    else if (this.state == "oval") {
      this.x = this.ovalCenterX + this.ovalRadiusX * cos(this.angle);  // X position on the ellipse
      this.y = this.ovalCenterY + this.ovalRadiusY * sin(this.angle);  // Y position on the ellipse
      this.angle += 0.05; // Increment angle to move along the ellipse
    
      if (this.angle > TWO_PI) { // Complete a full loop
        this.state = "offCanvas"; // Transition to offCanvas state
        this.angle = 0;
      }
    }
    else if (this.state == "offCanvas") {
      this.x += 4;  // Move horizontally to the right
      this.y += 2;  // Move vertically down
    
      if (this.x > width) { // Reset when off screen
        this.state = "line"; // Reset to 'line' state
        this.x = random(-200, 0); // New random starting position off the left edge
        this.y = random(200, 300); // Random vertical position
      }
    }
    

  }
}
