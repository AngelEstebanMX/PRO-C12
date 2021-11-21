var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png")
  boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
createCanvas(400,500);
path=createSprite(200,200,400,400)
path.addImage(pathImg)
path.velocityY=2
path.scale=1.2
boy=createSprite(200,450,50,70)
boy.addAnimation("running",boyImg)
boy.scale=0.8
leftBoundary=createSprite(15,200,30,600)
leftBoundary.visible=false
rightBoundary=createSprite(385,200,30,600)
rightBoundary.visible=false
}

function draw() {
  background(0);
  boy.x=World.mouseX;
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  if(path.y>400){
    path.y=height/2;
  }
  drawSprites();
}
