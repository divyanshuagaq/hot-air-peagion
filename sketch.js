var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg,peagion,peagionimage,peagiongroup;

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")

peagionimage = loadAnimation("assets/image2 (1).png","assets/image2 (2).png","assets/image3.png","assets/image4.png","assets/image5.png")
}

function setup(){
   
createCanvas(windowWidth,windowHeight)

//background image
bg = createSprite(250,250,width+200,height);
bg.addImage(bgImg);
bg.scale = 2.4

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.6;

peagiongroup = new Group ();

}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
          balloon.collide(bottomGround);
          spawnpeagion();
   
        drawSprites();
        
}
function spawnpeagion(){
if(frameCount%200 === 0){
  peagion = createSprite(10,Math.round(random(10,300)),50,50);
  peagion.addAnimation("peagion",peagionimage)
peagion.velocityX = 4;
peagion.scale = 0.5;
peagion.lifetime = 330;
peagiongroup.add(peagion);
}
}    