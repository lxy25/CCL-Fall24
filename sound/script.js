let mySound;

function preload() {
  // preload() runs once
  mySound = loadSound("assets/beat.mp3");
}

function setup() {
  // setup() waits until preload() is done
  createCanvas(400, 300);
  mySound.play();
}

function draw() {
  background(0);
}
