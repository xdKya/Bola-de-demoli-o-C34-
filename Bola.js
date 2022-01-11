class Bola{
    constructor(x,y,r,angle){
        var options = {
            //frictionAir: 0.05,
            density: 0.5,
            mass: 900000
       }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
        console.log(this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.r);
        pop();

    }
}