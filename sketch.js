const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var jointPoint,jointLink;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base=new Base(0,height-10,width*2,20,"grey",true)
  leftwall=new Base(300,height/2+50,600,100,"brown",true)
  rightwall=new Base(width-300,height/2+50,600,100,"brown",true)

   bridge=new Bridge(15,{x:width/2-400,y:height/2})
   jointPoint=new Base(width-600,height/2+10,40,20,"brown",true)

   Matter.Composite.add(bridge.body,jointPoint)
   jointLink=new Link(bridge,jointPoint)
}

function draw() {
  background(51);
  Engine.update(engine);

base.show();
leftwall.show();
rightwall.show();
bridge.show();

}
