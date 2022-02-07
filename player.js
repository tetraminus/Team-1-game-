class Player{
  constructor(){
    super("playertest");
  }
}


  preload() {
    
  }
   
  create() {

    this.player = this.add.rectangle(100, 150, 40, 40, 0xFF0000);
    this.player.enablePhysics(true);
    
    this.upKey = this.add.key("UP");
    this.leftKey = this.add.key("LEFT");
    this.rightKey = this.add.key("RIGHT");


    this.physics.setGravity(600);}

    update() {
    let speed = 0;

    if(this.upKey.isPressed() && this.square1.isGrounded()) {
      this.square1.setVelocityY(-400);
    
      
    }
    if(this.leftKey.isPressed()) {
      speed -= 150;
    if(this.rightKey.isPressed()) {
      speed += 150;
    }
    this.player.setVelocityX(speed);

    } 
    