
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(50,600);
	paper1.shapeColor = ("white");

	dustbin = createSprite(500,650,200,20);
	dustbin.shapeColor = ("red");

	dustbin2 = createSprite(595,600,20,125);
	dustbin2.shapeColor =("red");
	
	dustbin3 = createSprite(400,600,20,125);
	dustbin3.shapeColor =("red");	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}


