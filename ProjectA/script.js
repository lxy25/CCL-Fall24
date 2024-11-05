let controlLeftY, controlRightY;
let sinValue, cosValue;
let test;
let s;
let x,y;
let waterY;
let x2 = 50;
let y2 = 70;
let sx = 1;
let factor = 1;
let fishColor;
let fishSize;
let targetX,targetY;
// for feeding conditionals
let fed = 0;
let worm = 1;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container")
  s = 100;
  x = random(150,width-100);
  y = 400;
  fishColor = color(random(255),random(255),random(255));
  fishSize = random(100, 200);
  targetX = x;
  targetY = y;
}

function draw() {
  background(173, 207, 240);

  //cliff
  strokeWeight(6);
  stroke(120, 240, 136);
  fill(120, 240, 136);
  quad(
    -height,
    width / 3,
    height / 3,
    width / 3,
    height / 3,
    width / 2.5,
    -height,
    width * 1.5
  );

  //water + mouse
  // sinValue = sin(frameCount * 0.01);
  // test = sin(frameCount * 0.01 + PI);
  // controlLeftY = map(sinValue, -1, 1, 100, 400);
  // controlRightY = map(test, -1, 1, 100, 300);

  //water surface
  sinValue = sin(frameCount * 0.01);
  test = sin(frameCount * 0.01 + PI);
  cosValue = cos(frameCount * 0.01);
  controlLeftY = map(sinValue, -1, 1, 100, 400);
  controlRightY = map(test, -1, 1, 100, 300);
  stroke(131, 224, 252);
  fill(131, 224, 252);
  bezier(
    height / 3,
    width / 2.5,
    150,
    controlLeftY,
    250,
    controlRightY,
    height * 1.6,
    width * 0.4
  );
  waterY = controlLeftY;
  quad(height / 3, width / 2.5, height * 50, width * 0.4, 500, 500, 30, 500);

  // //purple fish 1 increase in size
  // drawFish((-width / 2) * 0.5, (height / 2) * 0.7);

  //rainbow fish
  drawRainbowFish(x, y + 10*noise(frameCount*0.02),fishSize);
  if (fed == 0) {
    moveFish();
  } else {
    moveFishToMouse();
  }


  //   function drawFish(x, y, s) {
  //     fill(219, 79, 208);
  //     noStroke();
  //     push();
  //     translate(x, y);
  //     s = sin(frameCount * 0.05);
  //     s = map(s, -1, 1, 0, 75);

  //     ellipse(width / 2, height / 2, s, s * 0.66);
  //     triangle(
  //       width / 2,
  //       height / 2,
  //       width / 2 - s / 2,
  //       height / 2 + s / 2,
  //       width / 2 - s / 2,
  //       height / 2 - s / 2
  //     );
  //     //eye
  //     stroke(0);
  //     strokeWeight(4);
  //     fill(0);
  //     ellipse(width / 2 + 5, height / 2, s * 0.1, s * 0.2);
  //     pop();

  //fishing rod metal
  noStroke();
  fill(104, 101, 128);
  quad(
    -height,
    width / 3,
    height / 2,
    width / 5,
    height / 3.9,
    width / 5,
    -height / 1.2,
    width / 2 - 20
  );
  //gold line
  stroke(247, 176, 62);
  strokeWeight(1.9);
  line(height / 2 - 2, width / 5, 400, 400);

  //fishing rod wood
  noStroke();
  fill(92, 63, 17);
  quad(
    -height + 100,
    width / 3 + 30,
    height / 2 - 50,
    width / 5 + 30,
    height / 3.9 + 110,
    width / 5 + 30,
    -height / 1.2 - 500,
    width / 2 + 30
  );
  strokeWeight(100);
  arc(height / 2 - 200, width / 4 + 23, 100, 13, 0, HALF_PI);
  arc(height / 2 - 110, width / 4, 100, 15, PI, TWO_PI);
  //black line
  stroke(0);
  strokeWeight(1.9);
  
    line(height / 2 - 14, width / 5 + 31, mouseX+20, mouseY);


  //gold worm
  stroke(247, 176, 62);
  drawWorm(370, 395);
  //normal worm
  
  if (worm == 1) {
    stroke(247, 161, 221);
    drawWorm(mouseX, mouseY);
  }



  //clouds
  fill(0);
  x2 = x2 + 1;
  drawCloud(x2, y2);
  drawCloud(x2 + 245, y2 + 40*noise(frameCount*0.01));
  drawCloud(x2 + 460, y2 - 10*noise(frameCount*0.01));
  drawCloud(x2 + 710, y2 + 40*noise(frameCount*0.01));
  if (x2 > width) {
    x2 = -800;
  }
}

function drawCloud(x2, y2) {
  noStroke();
  fill(255);
  arc(x2, y2 + 10, 50, 50, 0, TWO_PI);
  arc(x2 + 70, y2 + 10, 50, 50, 0, TWO_PI);
  arc(x2 + 35, y2 + 15, 50, 50, 0, TWO_PI);
  arc(x2 + 55, y2 - 15, 50, 50, 0, TWO_PI);
  arc(x2 + 15, y2 - 15, 50, 50, 0, TWO_PI);
}

//worms
function drawWorm(x, y, s) {
  noFill();
  strokeWeight(10);
  let controlX1 = x + 17.5;
  let controlY1 = y - 25;
  let controlX2 = x + 42.5;
  let controlY2 = y + 50;
  bezier(x, y, controlX1, controlY1, controlX2, controlY2, x + 60, y);
}

function drawRainbowFish(x, y) {
  fill(fishColor);
  noStroke();

  push();
  translate(x, y);
  scale(factor, 1);
  ellipse(0, 0, fishSize, fishSize * 0.9);
  triangle(0, 0, fishSize * 0.75, -fishSize * 0.5, fishSize * 0.75, fishSize * 0.5);
  //eye
  stroke(0);
  strokeWeight(4);
  fill(0);
  ellipse(-fishSize * 0.25, 0, fishSize * 0.1, fishSize * 0.2);
  // blush
  stroke(255, 105, 180);
  strokeWeight(5);
  noFill();
  line(- 10, 15, -30, 35);
  line(0 - 20, 0 + 15, 0 - 40, 0 + 35);
  line(0 - 30, 0 + 15, 0 - 50, 0 + 35);
  pop();
}

function moveFish() {
  x = x - sx;
  if (x < 200 || x > width-100) {
    sx = -sx;
    //factor = -factor;
  }
  
  let t = frameCount%1000;
  if(t == 99){
    sx = (random([-1,1]));
  }
  // console.log(sx);//viola
  factor = sx;
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    fishColor = color(random(255), random(255), random(255));
    fishSize = random(100, 200);
    worm = 1;
  }
}

function moveFishToMouse() {
  x=x+ (targetX - x) * 0.009; 
  y=y+ (targetY - y) * 0.009; 
  let d = dist(x,y,mouseX,mouseY); // any var to determine fish is fed
  if (d < 12) {
    fed = 0;
    worm = 0;
      }
  console.log(d);
}

function mousePressed() {
  if (mouseX > x && factor == 1) {
    factor = -factor
  } else if (mouseX < x && factor == -1) {
     factor = -factor
  }
  
  let dx = dist(mouseX, height, width, height);
  let dy = dist(width, mouseY, width, height);
  if (dx > 200 && dy < height/3) {
    targetX = mouseX;
    targetY = mouseY;
    fed = 1;
      }

}