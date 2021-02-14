var bgImage;
var batImage;
var playerImg;
var playerRunning;
var playerJumpinng;
var playerSlide;

function preload(){
  bgImage=loadImage("my first game.jpg");
  batImage=loadAnimation("bat1.png","bat2.png","bat3.png","bat4.png");
  playerImg=loadAnimation("Idle__002.png");
  playerRunning=loadAnimation("Run__000.png","Run__001.png","Run__002.png","Run__004.png");
  playerJumpinng=loadAnimation("jump__000.png","jump__005.png","jump__006.png","jump__007.png","jump__009.png",)
  playerSlide=loadAnimation("slide__001.png","slide__009.png");
}


function setup() {
  createCanvas(displayWidth-100,displayHeight-50);
  bg=createSprite(displayWidth/2-50,displayHeight/2,displayWidth-100,displayHeight);
  bg.addImage(bgImage);
 bg.scale=1.2;
 player=createSprite(50,displayHeight-250);
 player.addAnimation("idle",playerImg);
 player.addAnimation("running",playerRunning);
 playerJumpinng.addAnimation("jumping",playerJumpinng);
 playerSlide.addAnimation("slide",playerSlide);
 player.scale=0.4;
}

function draw() {
  background("white"); 
  if(keyWentDown(RIGHT_ARROW)){
    player.velocityX=2;
    player.changeAnimation("running");
  }
  if(keyWentUp(RIGHT_ARROW)){
    player.velocityX=0;
    player.changeAnimation("idle");
  }
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX=-2;
    player.changeAnimation("running");
  }
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX=0;
    player.changeAnimation("idle");
  }
  if(keyWentDown(j)){
    player.velocityY=-2;
    player.changeAnimation("jumping");
  }
  if(keyWentDown(s)){
    player.velocityY=+2;
    player.changeAnimation("slide");
  }
  if(frameCount % 100===0)
  {
    spawnEnemy()
  }
   drawSprites();
}
function spawnEnemy(){
  var enemy =createSprite(displayWidth-300,displayHeight-300,20,50);
  enemy.addAnimation("batFly",batImage);
  enemy.velocityX=random(-2,-1);
  enemy.velocityY=random(-1,+1);
}