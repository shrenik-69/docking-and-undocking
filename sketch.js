var spaceship,iss,hasDocked,bg;

function preload() {
spaceship_img = loadImage("spacecraft1.png");
spaceship_img2 = loadImage("spacecraft2.png");
spaceship_img3 = loadImage("spacecraft3.png");
spaceship_img4 = loadImage("spacecraft4.png");
bg = loadImage("spacebg.jpg");
iss_img = loadImage("iss.png");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 80, 50, 50);
  iss.addImage(iss_img);
  iss.scale = 0.4;

  spaceship =createSprite(400,390,50,50);
  spaceship.addImage(spaceship_img);
  spaceship.scale = 0.1;

  hasDocked = false;

  
  iss.setCollider("rectangle",-50,10,70,70);

}

function draw() {
  background(bg);
  
  //console.log(spaceship.y);

  if(!hasDocked) {

    if (keyDown("LEFT_ARROW")) {
      spaceship.x = spaceship.x -3
      spaceship.addImage(spaceship_img3);
    }

    if (keyDown("RIGHT_ARROW")) {
      spaceship.x = spaceship.x +3
      spaceship.addImage(spaceship_img4);
    }

    if (keyDown("UP_ARROW")) {
      spaceship.y = spaceship.y -3
      spaceship.addImage(spaceship_img2);
    }

    if (keyDown("DOWN_ARROW")) {
      spaceship.y = spaceship.y +3
      spaceship.addImage(spaceship_img1);
    }

    if (spaceship.isTouching(iss)) {
      hasDocked = true;
      text("Succesfuly docked",350,250);
    }
  } else {
    textSize(20);
    fill("white");
    text("Succesfuly docked!!!...",350,250);
  }
  drawSprites();
}
