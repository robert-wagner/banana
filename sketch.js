function setup() {
  createCanvas(windowWidth,windowHeight);
  var currentX = 50
  var currentY = 50;
}

function draw() {

  if (frameCount%3&&frameCount%5) {
    fill(255,0,255);
  }
  else if (frameCount%3) {
    fill(255,0,0);
  }
  else if (frameCount%5) {
    fill(0,0,255);
  }
  else{
    fill(255);
  }
  ellipse(currentX,currentY,100,100);
  currentX = currentX + random(-10,10);
  currentY = currentY + random(-10,10);
}
