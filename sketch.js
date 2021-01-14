const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3;
var bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(1350, 700);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(675, 100, 600, 50);

    bobObject1 = new bob(465, 600);
	bobObject2 = new bob(565, 600);
	bobObject3 = new bob(665, 600);
	bobObject4 = new bob(765, 600);
	bobObject5 = new bob(865, 600);

	rope1 = new Rope(bobObject1.body, roof.body, -100*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -50*2,  0);
	rope3 = new Rope(bobObject3.body, roof.body,  0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 50*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 100*2, 0);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(rgb(225, 237, 228));

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites(); 
  fill("black");
  textSize(20);
  text("Press UP or LEFT Arrow keys to swing the left Bob of the Newton's Cradle.", 340, 25);
  text("Press DOWN or RIGHT Arrow keys to swing the right Bob of the Newton's Cradle.", 340, 58);
}

function keyPressed()
{
	if((keyCode === LEFT_ARROW || keyCode === UP_ARROW) && bobObject1.body.position.x >= 415)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x : -1000, y : -300});
	}
	if((keyCode === RIGHT_ARROW || keyCode === DOWN_ARROW) && bobObject5.body.position.x <= 915)
	{
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x : 1000, y : 300});
	}
}




