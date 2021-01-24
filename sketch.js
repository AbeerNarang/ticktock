var hr;
var secAngle,sec;
var min;

function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  secAngle = createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);
  hr = hour();
  sec = second();
  min = minute();
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);
  push();
  rotate(secAngle);
  stroke("blue");
  line(0,0,100,0);
  pop();
  push();
  rotate(minAngle);
  stroke("green");
  line(0,0,100,0);
  pop();
  push();
  rotate(hrAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
  push();
  strokeWeight(7);
  noFill();
  arc(0,0,300,300,0,secAngle);
  arc(0,0,280,280,0,minAngle);
  arc(0,0,260,260,0,hrAngle);
  pop();
}