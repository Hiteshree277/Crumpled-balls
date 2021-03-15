
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine,world;
var log1,log2,log3;
var ground;
var ball;



function setup() {
	var canvas = createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	log1=new Log(1200,585,20,125); //left wall
	ground=new Ground(800,650,1600,15);
	log2=new Log(1395,585,20,125); //right wall
	log3=new Log(1300,630,173,20);
	ball=new Ball(300,615,40);


	Engine.run(engine);
  
}


function draw() {
	background("lightblue");
	rectMode(CENTER);
	Engine.update(engine);

	log1.display();
	ground.display();
	log2.display();
	log3.display();
	ball.display();

	



  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95})
	}
  
  
  }



