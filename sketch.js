var path,runner;
var path_Img,runner_Img;
var boundary,boundary2;

function preload(){
  //pre-load images
  path_Img   = loadImage     ("road.png");
  runner_Img = loadAnimation ("Runner2.png","Runner1.png");
}

function setup(){
  createCanvas(400,550);
  
  //create sprites here
  path = createSprite (200,200,100,100);
  path.addImage ("way",path_Img);
  path.scale = 1.5;
  path.velocityY = 4

  runner = createSprite (220,410,15,40);
  runner.addAnimation ("Runner",runner_Img);
  runner.scale = 0.1;

  boundary = createSprite (0,0,2,400);
  boundary.visible = false;

  boundary2 = createSprite (398,0,2,800)
  boundary2.visible = false;
}

function draw() {
  background ("white");

  if (path.y > 400) {
    path.y = height/2 ;
  }
  runner.x = World.mouseX ;
  runner.collide(boundary);
  runner.collide(boundary2);

  drawSprites ();
}
