class bob {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0.7,
          'friction':0.5,
          'density':1.2
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(x, y, 50, options);
      
      World.add(world, this.body);
    }
    display(){
     
     ellipseMode(RADIUS);
     strokeWeight(3);
     stroke("black");
     fill(rgb(149, 56, 217));
     ellipse(this.body.position.x,this.body.position.y,50, 50);
     }
  }