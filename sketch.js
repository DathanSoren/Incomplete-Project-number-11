var ship, ship_moving;
var sea, invisible_sea, seaimage;

function preload(){
  ship_moving.loadAnimation("ship-3.png", "ship-4.png");
  
  seaimage.loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  ship = createSprite(50,160,50,100);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.5;
  
  sea = createSprite(50,180,400,20);
  sea.addImage("sea", seaImage);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  invisible_sea = createSprite(50,170,400,20);
  invisible_sea.visible = false;
}

function draw() {
  background("blue");
 
  if (sea.x < 0) {
    sea.x = sea.width / 2;
  }

  ship.collide(invisible_sea);

  drawSprites();
}