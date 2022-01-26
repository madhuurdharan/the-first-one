
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var sky,skyImg;
var girl,girlImg;
var crowImg;
var startButton,startButtonImg;
var retry,retryImg;
var firstOne,FirstOneImg;
var END;
var PLAY;
var gameState=PLAY;
var bottleImg;
var backgroundImg;
var blockImg;
function preload()
{
  skyImg=loadImage("sky.jpg");
	girlImg=loadImage("super girl.png");
  coinImg	=loadImage("coin.png");
	startButtonImg=loadImage("play.png");
  crowImg=loadImage("crow.png");
    backgroundImg=loadImage("background.jpg")
    retryImg=loadImage("game over.png")
    FirstOneImg=loadImage("first one.png")
    bottleImg=loadImage("bottle.png")
   blockImg=loadImage("block.png")
}

function setup() {
	createCanvas(1267,608);
 
   back=createSprite(600,300);
   back.addImage(backgroundImg);
   back.scale=1.5;

   startButton=createSprite(800,500);
   startButton.addImage(startButtonImg);
   startButton.scale=0.9;

  girl=createSprite(200,230);
  girl.addImage(girlImg);
  girl.scale=0.1;
  girl.visible=false;

   firstOne=createSprite(680,150);
   firstOne.addImage(FirstOneImg);
   firstOne.scale=0.8;

   sky=createSprite(600,300);
   sky.addImage(skyImg);
   sky.visible=false;
   sky.depth =girl.depth
    girl.depth = girl.depth + 1;
    
  engine = Engine.create();
	world = engine.world;

  blockGroup = createGroup();
 crowGroup = createGroup();
  bottleGroup = createGroup();
coingroup=createGroup();
	//Create the Bodies Here.
  

  if(mousePressedOver(startButton)){
    block();
    coin();
    bottle();
    crow();
  }
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  if(gameState === PLAY){
   if(mousePressedOver(startButton)){
     back.destroy();
     startButton.destroy();
   firstOne.destroy();
   sky.visible=true;
   girl.visible=true;
   block();
    coin();
    bottle();
    crow();
  }

}
 
if(keyDown(UP_ARROW)){
  girl.velocityY=-2
}
if(keyDown(DOWN_ARROW)) {
girl.velocityY=2;
}



  drawSprites();
 
}
function block(){
  
  if(frameCount % 140=== 0){
   var block=createSprite(1200,230);
   block.y = Math.round(random(200,500))
   block.addImage(blockImg);
   block.scale=0.3;
   block.velocityX=-4;
   blockGroup.add(block);
   block.depth =girl.depth
   girl.depth = girl.depth + 1;
  
  }
}
function coin(){
  
  if(frameCount % 80=== 0){
   var coin=createSprite(1200,230);
   coin.y = Math.round(random(200,500))
   coin.addImage(coinImg);
   coin.scale=0.1;
   coin.velocityX=-4;
   coinGroup.add(coin);
   coin.depth =girl.depth
   girl.depth = girl.depth + 1;
  
  }
}
function bottle(){
  
  if(frameCount % 200=== 0){
   var bottle=createSprite(1200,230);
   bottle.y = Math.round(random(200,500))
   bottle.addImage(bottleImg);
   bottle.scale=0.3;
   bottle.velocityX=-4;
   bottleGroup.add(block);
   bottleImg.depth =girl.depth
   girl.depth = girl.depth + 1;
  
  }
}
function crow(){
  
  if(frameCount % 100=== 0){
   var crow=createSprite(1200,230);
  crow.y = Math.round(random(200,500))
   crow.addImage(crowImg);
   crow.scale=0.1;
   crow.velocityX=-4;
   crowGroup.add(crow);
   crow.depth =girl.depth
   girl.depth = girl.depth + 1;
  
  }
}
  
  
