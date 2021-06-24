class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("block.png")
      this.Visibility=255
     this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     if(this.body.speed<5){
       imageMode(CENTER)
      image( this.image ,this.body.position.x,this.body.position.y,this.width,this.height)  
     }else{
          push();
        this.Visibility=this.Visibility-5;
        tint(255,this.Visibility)
        World.remove(world,this.body)
        image( this.image ,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
      
     }
    }
  }