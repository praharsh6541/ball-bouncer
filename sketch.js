const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball
var engine, world;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic: true
  }
  var ball_options={
    restitution:1.5
  }
  ground=Bodies.rectangle(200,390,400,10,ground_options);
       ball=Bodies.circle(200,10,10, ball_options);
World.add(world,ground);
World.add(world,ball)
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  Engine.update(engine);
  background("grey"); 
  fill("green") 
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,20,20)
}
