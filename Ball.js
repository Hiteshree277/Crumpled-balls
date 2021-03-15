class Ball{
    constructor(x,y){
        var options={
            restitution:0.3,
            isStatic:false,
            friction:0.5,
            density:1.5
        }
        this.body=Matter.Bodies.circle(x,y,25,options);
        this.radius=25;
        
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill(255);
        stroke("lightblue");
        //ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}