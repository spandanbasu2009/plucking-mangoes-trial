
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var stone;
var launcher;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(950,150,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(1050,120,30);
	mango5=new mango(1350,140,30);
	mango6=new mango(980,150,30);
	mango7=new mango(1000,120,30);
	mango8=new mango(1300,130,30);
	mango9=new mango(1250,140,30);
	mango10=new mango(1200,150,30);

  stone = new Stone(240,420,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  launcher = new Launcher(stone,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  fill(255);
  text(mouseX+","+mouseY,mouseX,mouseY)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  launcher.display();

  groundObject.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stone,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcher.fly();
}
