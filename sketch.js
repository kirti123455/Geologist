const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane= new Plane(600,580,1200,20);
    hammer= new Hammer(10,100);
    rubber= new Rubber(600,400,60);
    stone= new Stone(200,200,70,80)
    iron = new Iron(100,100,40,50)
    R= new r(200,10,80)
    rubber1= new Rubber(800,400,80);
    stone1= new Stone(700,200,60,60)
    iron1 = new Iron(600,100,70,80)
    R1= new r(400,10,100)
}

function draw(){
    background("cyan");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
    R.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    R1.display();
 
 
}