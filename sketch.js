const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var solo;
var c1,c2,c3,c4,c5,c6;

var bola;

var corda;


function setup(){
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  solo = new Solo(width/2,580,width,40);

  c1 = new Caixa(900,520);
  c2 = new Caixa(950,520);
  c3 = new Caixa(1000,520);
  c4 = new Caixa(900,410);
  c5 = new Caixa(1000,410);
  c6 = new Caixa(950,300);

  bola = new Bola(600,450,80);

  corda = new Corda(bola.body,{x:600,y:50});
}
function draw(){
  background("black");

  Engine.update(engine);

  solo.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();

  bola.display();

  corda.display();

  Coordenadas();
}

function Coordenadas(){
  text("X: "+mouseX,10,10);
  text("Y: "+mouseY,10,20);
}

function mouseDragged(){
  Body.setPosition(bola.body,{x: mouseX,y: mouseY});
}