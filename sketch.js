var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
  cloudImage=loadImage("cloud.png")
  Obstacle1=loadImage("obstacle1.png")
  Obstacle2=loadImage("obstacle2.png")
  Obstacle3=loadImage("obstacle3.png")
  Obstacle4=loadImage("obstacle4.png")
  Obstacle5=loadImage("obstacle5.png")
  Obstacle6=loadImage("obstacle6.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
invisibleGround=createSprite(200,190,400,10)
invisibleGround.visible=false

}

function draw() {
background("blue");



//jump when the space button is pressed
if (keyDown("space")&&trex.y>=160) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8

if (ground.x < 0) {
  ground.x = ground.width / 2;
}

trex.collide(invisibleGround);
spawnClouds();
spawnObstacles();
drawSprites();
}

function spawnClouds(){
  if (frameCount%60==0){
 cloud1=createSprite(600,100,10,10);
  cloud1.velocityX=-3;
  cloud1.addImage("cloud",cloudImage);
  cloud1.y=Math.round(random(10,60));
  cloud1.scale=0.15
  cloud1.lifetime=200;
  }
}
function spawnObstacles(){
  if (frameCount%60==0){
    var Obstacles=createSprite(600,165,10,40);
    Obstacles.velocityX=-6;
    Obstacles.scale=0.05
    var rand=Math.round(random(1,6));
    switch(rand){
      case 1: Obstacles.addImage(Obstacle1);
              break;
      case 2: Obstacles.addImage(Obstacle2);
              break;
      case 3: Obstacles.addImage(Obstacle3);
              break;
      case 4: Obstacles.addImage(Obstacle4);
              break;
      case 5: Obstacles.addImage(Obstacle5);
              break;
      case 6: Obstacles.addImage(Obstacle6);
              break;
      default:break;
    }
  }
}