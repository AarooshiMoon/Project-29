const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var paper, ground, stand, polygon;
var dustbin1, dustbin2, dustbin3;
var launcher;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

function setup() {
	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	polygon = new Polygon(50,200,20);
  ground = new Ground(750,580,1500,20);
  stand = new Ground(1100,450,350,20);
	launcher = new Launcher(polygon.body, {x:250, y:200});

//level two
  box1=new Box(1000,200,30,40);
  box2=new Box(1050,200,30,40);
  box3=new Box(1100,200,30,40);
  box4=new Box(1150,200,30,40);
  box5=new Box(1200,200,30,40);

//level three
  box6=new Box(1050,140,30,40);
  box7=new Box(1100,140,30,40);
  box8=new Box(1150,140,30,40);

//top
  box9=new Box(1100,20,30,40);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  polygon.display();
  launcher.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  stand.display();

  drawSprites();
}

function mouseDragged(){
   Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}