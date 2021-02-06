
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	


function setup() {
	createCanvas(700,300);


	engine = Engine.create();
	world = engine.world;

    fill("red");

	ground = new Ground (350,270,700,10);

	paper = new Line (680,240,15,70);
	paper2 = new Line (580,240,15,70);
	paper3 = new Line(630,260,100,15);

	crumble = new Paper(100,200,10);
	fill("blue");
	Engine.run(engine);

}


function draw() {

  rectMode(CENTER);
  background(0);
  paper.display();
  paper2.display();
  paper3.display(); 
  ground.display();
  crumble.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumble.body, crumble.body.position,{x:0.5,y:-2.0});
	}
}


