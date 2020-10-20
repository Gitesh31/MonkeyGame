// making some variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  // creating sprite for monkey
  monkey = createSprite(80,315,100,100);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale = 0.1;
  
  //creating ground 
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  // creating some groups
  bananaGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("white");
  
  //making monkey jump
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY = -12;
  }
    
  //add gravity
  monkey.velocityY = monkey.velocityY + 1;  
  
  
  // reseting the ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //making monkey collide with ground
  monkey.collide(ground);
  
  // calling some functions
  food();
  obstacles();
  
  // creating display for survival time
  stroke("white");
  textSize(20);
  text("score:" + score,500,50);
  
  stroke("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50)
  
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(200,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.velocityX = -3;
    banana.addImage(bananaImage)
    banana.scale = 0.1;
    banana.lifetime = 375;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
     obstacle = createSprite(200,310,50,50);
     obstacle.lifetime = 375;
     obstacle.addImage(obstacleImage);
     obstacle.velocityX = -3;
     obstacle.scale = 0.2;
     obstacleGroup.add(obstacle);
     }
}




