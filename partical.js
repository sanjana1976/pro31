class Particle{
    constructor(x,y){
        var options={
            restitution:0.4,
        }
          //  this.r= radius;
            this.body= Bodies.circle(x,y,1,options);
 this.color= color(random(0,225),random(0,225),random(0,225));
 World.add(world,this.body);

    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        ellipse(0,0,this.width,this.height)
        pop();

    }
}