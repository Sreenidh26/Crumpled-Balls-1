class Paper
{
    constructor(x,y,width,height)
    {
        var options =
        {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body=Bodies.rectangle(x,y,55,55,options,1);
        this.width=55;
        this.height=55;
        World.add(world,this.body);
    }
    
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("black");
        strokeWeight(3);
        fill("purple");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}