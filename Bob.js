class Bob{
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution':1,
            'friction':0.5,
            'density':1.2,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
      
       this. radius =  radius;
        World.add(world, this.body);

       
          
        
      } 

     /* pushall(){
        this.bob = null
      }*/
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(128,0,128);
        ellipse( 0, 0,this. radius,this. radius);
        pop();
       
      }
}