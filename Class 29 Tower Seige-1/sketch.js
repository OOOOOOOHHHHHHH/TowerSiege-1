const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var ground1
var engine
var world
var box6
var box4,box5
var box1,box2,box3
var SLINGSHOT
var polygon1

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
  ground1 = new ground(400,400,400,100);
  box1 = new Box(350,300,70,70);
  box2 = new Box(420,300,70,70);
  box3 = new Box(490,300,70,70);
  box4 = new Box(385,200,70,70);
  box5 = new Box(455,200,70,70);
  box6 = new Box(420,100,70,70);
  polygon1 = new Polygon(100,50);
  
  SLINGSHOT = new SlingShot(polygon1.body,{x:100,y:200});
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
  SLINGSHOT.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  SLINGSHOT.fly();
}