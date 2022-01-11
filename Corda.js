class Corda {
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:1,
            length:400
        }

        this.corda = Constraint.create(options);
        World.add(world,this.corda);
        this.pointB = pointB;
        
    }

    display(){
        var A = this.corda.bodyA.position;
        var B = this.pointB;

        push()
        stroke("white")
        line(B.x,B.y,A.x,A.y-50);
        pop()
    }
    
}