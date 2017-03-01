var currentX = 0;
var currentY = 0;
var foodFlag = 0;
var foodX = 0;
var foodY = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  currentX = width/2;
  currentY = height/2;
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
  if (foodFlag) {
    if (dist(currentX,currentY,foodX,foodY)<20) {
      foodFlag = 0;
    } else {
      currentX = currentX + random(-10,10) + 5*cos(atan2(foodY-currentY,foodX-currentX));
      currentY = currentY + random(-10,10)+ 5*sin (atan(foodY-currentY,foodX-currentX));
    }
  } else {
    foodX = random(0,width);
    foodY = random(0,height);
    fill(255,255,0);
    ellipse(foodX,foodY,20,20);
    foodFlag = 1;
  }

}
