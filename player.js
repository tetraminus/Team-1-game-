class Player{
  constructor(){
    super("Player");
  }
}


  preload() {
    
  }
   
  create() {
    this.onFloor;

    this.player = this.add.rectangle(100, 150, 40, 40, 0xFF0000);
    this.player.enablePhysics(true);

    this.cameras.main.startFollow(this.player);

    this.player.setBoundsRectangle(0, 0, 600, 400);
    this.a = this.add.key('A');
    this.d = this.add.key('D');
    this.w = this.add.key('W');
    this.s = this.add.key('S');

    this.left = this.add.key('LEFT');
    this.right = this.add.key('RIGHT');

  update() {
 //check if Grounded
    if (this.player.isGrounded()) {
      this.onFloor = true;
    }
    else {
      this.onFloor = false;
    }
    //Player movement
    if (this.w.isPressed() || this.up.isPressed() && this.onFloor == true) {
      this.player.setVelocityY(-35 * this.playspeed);
    }
    else if (this.d.isPressed() || this.right.isPressed()) {
      this.player.setVelocityX(30 * this.playspeed);
    }
    else if (this.a.isPressed() || this.left.isPressed()) {
      this.player.setVelocityX(-30 * this.playspeed);
    }
    else {
      this.player.setVelocityX(0);
    }
  }