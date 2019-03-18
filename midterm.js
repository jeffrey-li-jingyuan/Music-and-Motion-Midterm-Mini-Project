
var mic;
var vol;
function setup() {
  createCanvas(500, 500);
  //mic input setting
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  rectMode(CENTER);
  var vol = mic.getLevel();
  background(8, 6, 55);
  fill(10);
  rect(width/2, height/2 + 30, 400, 440);
  if (vol > 0.2){
  fill (243, 255, 65);
  }
  for (let i = 100; i <= width - 60; i += 50){
    for (let j = 130; j <= height; j += 70){
    rect(i, j, 30, 50)
    }
  }
}
