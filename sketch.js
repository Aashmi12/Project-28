
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var stone,stoneImage;
var ground;
var boy,boyImage;
var mango1,mango2,mango3,mango4;



function setup() {

	createCanvas(1300,700);
  engine = Engine.create();
	world = engine.world;

  boy = new Boy(250,600);
  tree = new Tree(1000,680);
  mango1 = new Mango(900,415,30,30);
	mango2 = new Mango(800,375,30,30);
	mango3 = new Mango(1120,390,30,30);
	mango4 = new Mango(1180,410,30,30);

	stone = new Stone(190,520,20);

  ground = new Ground(0,680,4000,80);
	chain = new Chain(stone.body,{x:190, y:520});

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("lightBlue");

  fill(123,6,73);
  textSize(25);
  text("Press Space to get a second Chance to Play", 60,200);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
 

  ground.display();
  tree.display();
  boy.display();
  stone.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
 
  drawSprites();
}



function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}



function mouseReleased() {
    chain.fly();
}



function keyPressed() {
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:190, y:520});
    chain.attach(stone.body);
  }
}



function detectCollision(lstone,lmango) {
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
    if(distance <= lmango.r + lstone.r){
       Matter.Body.setStatic(lmango.body, false);
  }
}


