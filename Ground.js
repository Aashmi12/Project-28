class Ground
{
    constructor(x,y,width,height) {
        var ground_options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var post = this.body.position;
        rectMode(CENTER);
        stroke(63,130,30)
        fill(63,130,30);
        rect(post.x,post.y,this.width,this.height);
    }
}