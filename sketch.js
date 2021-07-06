var issImg, spaceBg, sc1, sc2, sc3, sc4;
var iss, spacecraft;
var hasDocked = false;
function preload(){
issImg = loadImage("iss.png");
spaceBg = loadImage("spacebg.jpg");
sc1 = loadImage("spacecraft1.png")
sc2 = loadImage("spacecraft2.png")
sc3 = loadImage("spacecraft3.png")
sc4 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(300, 100);
  iss.addImage(issImg);
  iss.scale = 0.25;
  spacecraft = createSprite(250, 250);
  spacecraft.addImage(sc1);
  spacecraft.scale = 0.15;

}


function draw() {
  background(spaceBg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1, 1);
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-2;

    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(sc3);
      spacecraft.x = spacecraft.x-1;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(sc4);
      spacecraft.x = spacecraft.x+1;

    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(sc2);
    }
  }
  if(spacecraft.y>=(iss.y+70)&& spacecraft.x>=(iss.x-10)){
    hasDocked = true;
    textSize(30);
    fill("white");
    text("Docking Successful", 200, 300);
  }
  drawSprites();
}