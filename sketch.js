const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground, paperObject;
var left, right, bottom;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(400,670,width,20); 
	paperObject = new paper(180,655,70);
	left = new dustbin(546,610,20,100);
	right = new dustbin(725,610,20,100);
	bottom = new dustbin(635,655,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  Ground.display();
  paperObject.display();
  left.display();
  right.display();
  bottom.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x: 85, y: -85});
	}
}