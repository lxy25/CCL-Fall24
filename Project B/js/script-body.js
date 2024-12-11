var w = 1000,
    h = 800;
let x, y;
let body;
let noiseOffset = 0;
let lineIndex = 0;
let shakeAmount = 0;
let shakeDuration = 0;
let shakeMaxDuration = 10;

let message1Shown = false;
let message2Shown = false;
let message3Shown = false;
let message4Shown = false;
let randomPos = [];
let sizeText = [];

function drawHeart(x, y, s) {
  push();
  translate(x, y);
  noStroke();
  fill(237, 56, 43);
  quad(
    (125 * s) / 30,
    (125 * s) / 30,
    (150 * s) / 30,
    (100 * s) / 30,
    (125 * s) / 30,
    (85 * s) / 30,
    (100 * s) / 30,
    (100 * s) / 30
  );
  circle((110 * s) / 30, (88.5 * s) / 30, s);
  circle((140 * s) / 30, (88.5 * s) / 30, s);
  pop();
}
function heartBreak(x, y, s) {
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(1.5);

  if (lineIndex >= 1) {
    line((125 * s) / 30, (88.5 * s) / 30, (125 * s) / 32 + 15, (100 * s) / 30);
  }
  if (lineIndex >= 2) {
    line(
      (125 * s) / 32 + 15,
      (100 * s) / 30,
      (90 * s) / 35 + 45,
      (100 * s) / 28
    );
  }
  if (lineIndex >= 3) {
    line((90 * s) / 35 + 45, (100 * s) / 28, (125 * s) / 29, (88.5 * s) / 23);
  }
  if (lineIndex >= 4) {
    line((125 * s) / 29, (88.5 * s) / 23, (131 * s) / 36 + 15, (91 * s) / 22);
  }
  pop();
}

function preload() {
  body = loadImage("assets/fixed-body.png");
}

function setup() {
  let canvas = createCanvas(windowWidth/1.5, windowHeight/1.5);
  canvas.parent("p5-body-canvas-container");
  x = width / 2;
  y = height / 2
}

function draw() {
  background(0);
  if (shakeAmount > 0) {
    let shakeX = random(-5, 5);
    let shakeY = random(-5, 5);
    translate(shakeX, shakeY);
    shakeAmount=shakeAmount-1;
    
  }
  let size = map(sin(frameCount * 0.06), -1, 1, 28, 30);
  image(body, 400, 0, 300, 400);
  drawHeart(450, 60, size);
  noiseOffset += 0.01;
  heartBreak(450, 60, size);
  
textSize(40);
  fill(252, 3, 3);
  textAlign(CENTER, CENTER);
  // textAlign(horizAlign, [vertAlign],)
textWrap (WORD);

  if (message1Shown) {
    textSize(sizeText[0]);
    text('You are so skinny you look disgusting.', 100, randomPos[0], 1000);
  }
  if (message2Shown) {
    textSize(sizeText[1]);
    text('Uglies are not worthy of love and affection!', 100, randomPos[1], 1000);
  }
  if (message3Shown) {
    textSize(sizeText[2]);
    text('You put on too much makeup...', 100, randomPos[2], 600);
  }
  if (message4Shown) {
    textSize(sizeText[3]);
    text('If only you had a prettier face...', 100, randomPos[3], 600);
  }

}
function mousePressed() {
  if (lineIndex < 4) {
    lineIndex=lineIndex+1;
  }
  shakeAmount = shakeMaxDuration;
  for(let i = 0; i< 4; i++){
    randomPos[i] = random(200,400);
    sizeText[i] = random(30, 70);
    
  }
  
   if (!message1Shown) {
    message1Shown = true;  
  } else if (message1Shown && !message2Shown) {
    message1Shown = false; 
    message2Shown = true;  
  } else if (message2Shown && !message3Shown) {
    message1Shown = false;
    message2Shown = false;  
    message3Shown = true;  
  } else if (message3Shown && !message4Shown) {
    message1Shown = false;
    message2Shown = false;
    message3Shown = false;  
    message4Shown = true;  
  } else {
    message1Shown = false;
    message2Shown = false;
    message3Shown = false;
    message4Shown = false;
  }
}

