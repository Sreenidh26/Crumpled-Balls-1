
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var paper,ground,box1


function setup() {
	createCanvas(1400, 380);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,380,1400,20)

	paper = new Paper(200,190);

	box1 = new Box(1095,300,20,200);
	box2 = new Box(1275,300,20,200);
	box3 = new Box(1185,370,200,20);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  
  paper.display()

  ground.display()

  box1.display()

  box2.display()

  box3.display()


  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:210,y:-230});
	}
}



