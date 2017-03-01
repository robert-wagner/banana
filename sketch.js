var currentX = 0;
var currentY = 0;
var foodFlag = 0;
var foodX = 0;
var foodY = 0;
var sizeEllipse = 100;
function setup() {
  createCanvas(windowWidth,windowHeight);
  currentX = width/2;
  currentY = height/2;
}

function draw() {

  fill(currentX/width*255,currentY/height*255,128);
  noStroke();
  ellipse(currentX,currentY,sizeEllipse,sizeEllipse);
  if (foodFlag) {
    if (dist(currentX,currentY,foodX,foodY)<20) {
      foodFlag = 0;
      sizeEllipse +=20;
    }
    else {
      if ((dist(currentX,currentY,foodX,foodY)>(height+width)/5)&&(frameCount%7!=0)) {
        currentX = currentX + random(-10,10);
        currentY = currentY + random(-10,10);
        sizeEllipse -=(1/20);
        sizeEllipse = constrain(sizeEllipse,50,200);
      }
      else {
        currentX = currentX + random(-10,10) + 5*cos(atan2(foodY-currentY,foodX-currentX));
        currentY = currentY + random(-10,10)+ 5*sin (atan(foodY-currentY,foodX-currentX));
        sizeEllipse -=(1/20);
        sizeEllipse = constrain(sizeEllipse,50,200);
      }
    }
  } else {
    foodX = random(0,width);
    foodY = random(0,height);
    //fill(255,255,0);
    //ellipse(foodX,foodY,20,20);
    foodFlag = 1;
  }

}
