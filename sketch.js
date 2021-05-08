const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var playerP, playerC, playerPB, playerCB;

var ball;

function preload(){

}

function setup() {

  createCanvas(1400, 1200);
  engine = Engine.create();
  world = engine.world;

  playerP = createSprite(650, 70, 150, 20);
  playerPB = createSprite();
  playerPB.x = playerP.x;
  playerPB.y = playerP.y;
  playerPB.scale = 0.5;

  playerC = createSprite(650, 560, 150, 20);
  playerCB = createSprite();
  playerCB.x = playerC.x;
  playerCB.y = playerC.y;
  playerCB.scale = 0.5;

  ball = createSprite(650, 300, 20, 20);

  for(var i=0;i<1200;i=i+20){
    line(i,00,i+10,600);
    strokeWeight(10)
  } 
  
}

function draw() {
  background("Green");
  Engine.update(engine);

  drawSprites();
}
function Control(){
  if(keyPressed(LEFT_ARROW)){
    playerP.velocityX = -10;
  }
}