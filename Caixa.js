class Caixa{
    constructor(x,y){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 0.01,
            mass:10
        }

        this.body = Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);
        this.w = 100;
        this.h = 100;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.w,this.h);
        pop();

    }
}