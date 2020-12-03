const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground
var division1,division2,division3,division4,division5,division6,division7,division8
var particles=[]
var plinko=[]
function setup() {
  createCanvas(520,800);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(750,780,3000,30);
  division1= new Division(750,760,3000,20);
  
  division2= new Division(10,670,10,200);
  division3= new Division(120,670,10,200);
  division4= new Division(230,670,10,200);
  division5= new Division(340,670,10,200);
  division6= new Division(450,670,10,200);
  division7= new Division(560,670,10,200);
  division8= new Division(680,670,10,200);
  
  





}

function draw() {
  background("cyan");
  Engine.update(engine);  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-1,width/2+1),2,2))
    }
    for(var k=0; k<particles.length; k++){
      particles[k].display();
      }
      for(var j = 40; j<= width; j = j+100){
        plinko.push(new Plinko(j,75))
      }
      for(var j = 15; j<= width; j = j+100){
        plinko.push(new Plinko(j,175))
      }
      for(var j = -25; j<= width; j = j+100){
        plinko.push(new Plinko(j,275))
      }
      for(var j = -5; j<= width; j = j+100){
        plinko.push(new Plinko(j,375))
      }
      for(var j=0; j<plinko.length; j++){
        plinko[j].display();
        }
  drawSprites();
}