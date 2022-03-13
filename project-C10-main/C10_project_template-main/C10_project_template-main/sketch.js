
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadImage("ship-1.png")
}

function setup(){
  createCanvas(400,400);
  seaImage = createSprite(0,400,280,250);
  seaImage.addImage(seaImg)
  shipImage = createSprite(50,30,50,20);
  shipImage.addImage(shipImg1)
  
}

function draw() {
  background("lightblue");
drawSprites();
}