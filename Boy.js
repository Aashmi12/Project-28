class Boy {
    constructor(x,y) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }

      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 200;
      this.height = 300;
      this.image = loadImage("boy.png");
      World.add(world, this.body);
    }


    display(){
      var pos = this.body.position;
      push();

      translate(pos.x,pos.y);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);

      pop();
    }
  }