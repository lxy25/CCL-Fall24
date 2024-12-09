
let capture;
let tracker
// use distance
let d;

let w = 1000,
  h = 800;
let eyeSound = [];
let noseSound = [];
let mouthSound = [];
let skinSound = [];

let position;

let eyeSoundPlay;

function preload() {
  eyeSound.push(loadSound('assets/EYES-canto.mp3'))
  eyeSound.push(loadSound('assets/EYES-chinese.mp3'))
  eyeSound.push(loadSound('assets/EYES-korean.mp3'))
  eyeSound.push(loadSound('assets/EYES-mongolian.mp3'))

  noseSound.push(loadSound('assets/NOSE-tagalog.mp3'))
  noseSound.push(loadSound('assets/NOSE-indonesian.mp3'))
  noseSound.push(loadSound('assets/NOSE-spanish.mp3'))
  noseSound.push(loadSound('assets/NOSE-chinese.mp3'))
  
  mouthSound.push(loadSound('assets/LIPS-mongolian.mp3'))
  mouthSound.push(loadSound('assets/LIPS-korean.mp3'))
  mouthSound.push(loadSound('assets/LIPS-spanish.mp3'))
  mouthSound.push(loadSound('assets/LIPS-thai.mp3'))

  skinSound.push(loadSound('assets/SKIN-chinese.mp3'))
  skinSound.push(loadSound('assets/SKIN-korean.mp3'))
  skinSound.push(loadSound('assets/SKIN-spanish.mp3'))
}

function setup() {
  //Creates a new HTML5 <video> element that contains the audio/video feed from a webcam.
  capture = createCapture({
    audio: false,
    video: {
      width: w,
      height: h
    }
  }, function () {
    console.log('capture ready.')
  });
  capture.elt.setAttribute('playsinline', '');
  let canvas = createCanvas(w, h);
  canvas.parent("p5-canvas-container");

  capture.size(w, h);
  capture.hide();

  colorMode(HSB);
  //clm is a different library
  tracker = new clm.tracker();
  //init = initialize
  tracker.init();
  // this starts the capture
  tracker.start(capture.elt);
}

function draw() {
  image(capture, 0, 0, w, h);
  positions = tracker.getCurrentPosition();


  // noFill();
  // stroke(255);
  // //creates line shape around the face
  // beginShape();
  // for (var i = 0; i < positions.length; i++) {
  //   vertex(positions[i][0], positions[i][1]);
  // }
  // //ends line shape around the face
  // endShape();

  // noStroke();
  // // for loop puts together the line shape, points and numbers on face detection
  // for (var i = 0; i < positions.length; i++) {
  //   //changes the color over time, "50, 100") rgb, "0-300" controls the hue
  //   fill(map(i, 0, positions.length, 0, 360), 50, 100);
  //   //creates points in line on face shape
  //   ellipse(positions[i][0], positions[i][1], 4, 4);
  //   // creates the numbers around the shape of face
  //   text(i, positions[i][0], positions[i][1]);
  // }

  // measureDistance(positions);
  // let leftEyeDist = dist(mouseX, mouseY, positions[27][0], positions[27][1])
  // console.log(positions[27])



  // estimate smiling amount through distance of corners of mouth
  //this code says if there is a face there, do something.
  // if (positions.length > 0) {
  //   // [44] and [50] located on corner of mouth. Created vector to detect mouth movement.
  //     var mouthLeft = createVector(positions[44][0], positions[44][1]);
  //     var mouthRight = createVector(positions[50][0], positions[50][1]);
  //     var smile = mouthLeft.dist(mouthRight);

  // }
}

function mousePressed() {
  if (positions) {
    let leftEyeDist = dist(mouseX, mouseY, positions[27][0], positions[27][1])
    if (leftEyeDist <= 30) {
      //GO BEYOND >
      // eyeSoundPlay = eyeSounds[floor(random(3))];
      // if (eyeSoundPlay.isPlaying() == false) {
      //   eyeSoundPlay.play();
      // } 
     playRandomEyeSound();

    }
    let rightEyeDist = dist(mouseX, mouseY, positions[32][0], positions[32][1])
    if (rightEyeDist <= 30) {
      playRandomEyeSound();

    }
    let noseTipDist = dist(mouseX, mouseY, positions[62][0], positions[62][1])
    if (noseTipDist <= 35) {
      playRandomNoseSound();

    }
    let leftMouthDist = dist(mouseX, mouseY, positions[60][0], positions[60][1])
    if (leftMouthDist <= 40) {
      playRandomMouthSound();
    }
    let rightSkinDist = dist(mouseX, mouseY, positions[12][0], positions[12][1])
    if (rightSkinDist <= 40) {
      playRandomSkinSound()
    }
    let leftSkinDist = dist(mouseX, mouseY, positions[2][0], positions[2][1])
    if (leftSkinDist <= 40) {
      playRandomSkinSound()
    }
  }
}

  function measureDistance(positions) {
    // if (positions.length==0) return null; 

    let leftEye = positions[27];
    let rightEye = positions[32];
    let noseTip = positions[62];
    let leftMouth = positions[54];
    let rightMouth = positions[48];

    let leftEyeDist = dist(mouseX, mouseY, positions[27][0], positions[27][1])

    // let eyeDistance=dist(leftEye[0],leftEye[1],rightEye[0],rightEye[1]);
    // let noseToLeftMouth = dist(noseTip[0], noseTip[1], leftMouth[0], leftMouth[1]);
    // let noseToRightMouth = dist(noseTip[0], noseTip[1], rightMouth[0], rightMouth[1]);
    // let mouthDistance = dist(leftMouth[0], leftMouth[1], rightMouth[0], rightMouth[1]);

    console.log("test")
  }

  function playRandomEyeSound(){
    let randomIndex= floor (random(eyeSound.length));
    let soundToPlay= eyeSound [randomIndex];

    if (soundToPlay.isPlaying() == false){
      soundToPlay.play();
    }
  }
  function playRandomNoseSound(){
    let randomIndex= floor (random(noseSound.length));
    let soundToPlay= noseSound [randomIndex];

    if (soundToPlay.isPlaying() == false){
      soundToPlay.play();
    }
  }


  function playRandomMouthSound(){
    let randomIndex= floor (random(mouthSound.length));
    let soundToPlay= mouthSound [randomIndex];

    if (soundToPlay.isPlaying() == false){
      soundToPlay.play();
    }
  }

  function playRandomSkinSound(){
    let randomIndex= floor (random(skinSound.length));
    let soundToPlay= skinSound [randomIndex];

    if (soundToPlay.isPlaying() == false){
      soundToPlay.play();
    }
  }