var w = 1000,
    h = 800;
    let x, y;
let body;
let noiseOffset = 0;
let lineIndex = 0;
let shakeAmount = 0;
let shakeDuration = 0;
let shakeMaxDuration = 10;

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
  body = loadImage("assets/body.jpg");
}

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("p5-canvas-container");
  x = width / 2;
}

function draw() {
  background(255);
  if (shakeAmount > 0) {
    let shakeX = random(-5, 5);
    let shakeY = random(-5, 5);
    translate(shakeX, shakeY);
    shakeAmount--;
  }
  let size = map(sin(frameCount * 0.06), -1, 1, 28, 30);
  image(body, 50, 0, 300, 400);
  drawHeart(100, 60, size);
  noiseOffset += 0.01;
  heartBreak(100, 60, size);
}
function mousePressed() {
  if (lineIndex < 4) {
    lineIndex++;
  }
  shakeAmount = shakeMaxDuration;
}