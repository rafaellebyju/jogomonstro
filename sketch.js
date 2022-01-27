//mensagem de gameover (poxa essa aqui eu fico te devendo)
// verficar se tem vazamento de memoria no jogo( e isso eu nao emtendi)

var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.2;
  climbersGroup = new Group()
}

function draw() {

  if(gameState === "play"){
  //tudo q acontece durante o gameplay

  if(keyDown("space")){
    ghost.velocityY = -10  
  }
  if(keyDown("right_arrow")){
    ghost.x += 10
  }
  if(keyDown("left_arrow")){
    ghost.x -= 10
  }
  
  ghost.velocityY = ghost.velocityY + 0.2
  if(tower.y > 400){
    tower.y = 300
  }

  porta(); 

  if(ghost.y > 600) {
    gameState = "end"
  }

  }

  if(gameState === "end"){
    //tudo q acontece durante o fim do jogo
   
  

    tower.velocityY = 0 
    portaGroup.setLifetimeEach(-1);
    portaGroup.setVelocityYEach(0);   
  
  }

  background(200);
  
  ghost.collide(climbersGroup)
  
  
    drawSprites();
}

function porta(){
  if(frameCount%60===0){
    var porta = createSprite(200,-50)
    porta.velocityY = 5;
    porta.addImage(doorImg);
    porta.x = Math.round(random(120,400));
    var apoio = createSprite(200,10)
    apoio.velocityY = 5;
    apoio.addImage(climberImg);
    apoio.x = porta.x
    climbersGroup.add(apoio)  
    ghost.depth = porta.depth
    ghost.depth += 1 
  }
}
