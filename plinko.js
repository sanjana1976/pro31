  class Plinko{
    constructor(x,y){
        var options={
          //  "restitution":0.3,
          //  "friction": 0.5,
          //  "density": 1.2,
            "isStatic" : true 
        }
        
        this.body= Matter.Bodies.circle(x,y,5,options);
       

        World.add(world,this.body);

    }    
    display(){
        var pos= this.body.position
       
        push();
        translate(pos.x,pos.y);
      rectMode(CENTER)
        ellipse(0,0,this.width,this.height);
        pop();
    }
    
    }