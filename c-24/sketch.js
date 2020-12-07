var brick1, brick2, brick3;
var ground;
var paperball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  rectMode(CENTER)
  createCanvas(1600, 600);

  engine = Engine.create();
  world = engine.world;

  paperball = new Paper(80,550);
  brick1 = new Dustbin(1000, 550, 150, 20);
  brick2 = new Dustbin(1065, 460, 20, 160);
  brick3 = new Dustbin(935, 460, 20, 160);
  ground = new Ground(550, 570, 1800, 20);
  
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);
  
  paperball.display();
  ground.display();
  brick1.display();
  brick2.display();
  brick3.display();
  drawSprites();
}

function keyPressed(){
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperball.body, paperball.body.position,{x : 85, y : -85});	
}
}