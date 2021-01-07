var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rectangle1,rectangle2,rectangle3;
var rectangle1Sprite,rectangle2Sprite,rectangle3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectangle1Sprite=createSprite(width/2, 645, 200,20);
	rectangle1Sprite.shapeColor = "red";	
	rectangle2Sprite=createSprite(300,605,20,100);
	rectangle2Sprite.shapeColor = "red";
	rectangle3Sprite=createSprite(500,605,20,100);
	rectangle3Sprite.shapeColor = "red";
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2,200,5,{restitution:0.3,isStatic:true});	
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10);
	World.add(world, ground);
	Engine.run(engine);

	rectangle1 = Bodies.rectangle(width/2,645,200,20,{isStatic:true});
	World.add(world, rectangle1);
	Engine.run(engine);	
	rectangle1.shapeColor = "red";

	rectangle2 = Bodies.rectangle(300,605,20,100,{isStatic:true});
	World.add(world,rectangle2);
	Engine.run(engine);
	rectangle2.shapeColor = "red";
	
	rectangle3 = Bodies.rectangle(500,605,20,100,{isStatic:true});
	World.add(world,rectangle3);
	Engine.run(engine);
	rectangle3.shapeColor = "red";
	
	}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
	
 //rectMode(CENTER);
 //rectangle1Sprite.x = rectangle1.position.x;
 //rectangle1Sprite.y = rectangle1.position.y;
	
 drawSprites();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW) 
 
     {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);	
	  }
}
