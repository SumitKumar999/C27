class Slingshot {
    constructor(bodyA,bodyB){
        var option = {stiffness:0.04,
        length:20,
        bodyA:bodyA,
        bodyB:bodyB
}
    this.chain = Matter.Constraint.create(option)
    World.add(world,this.chain)
    }
     
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4); // make the border or line thik or thin
        line(pointA.x, pointA.y, pointB.x, pointB.y)

    }
}