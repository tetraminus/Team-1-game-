class Scene8 extends SimpleScene {
  constructor() {
    super("Scene8");

  }

  preload() {

  }

  create() {

    this.playspeed = 10;

    this.physics.setGravity(800);

    //Create player
    this.player = this.add.rectangle(300, 300, 25, 25, 0x00FFFF);

    //Create Enemy
    this.enemy = this.add.rectangle(150, 300, 25, 25, 0x0000FF)


    //Check if on floor
    this.onFloor = false;
    //Add Physics
    this.player.enablePhysics();
    this.enemy.enablePhysics();
    //this.physics.add.collider(this.player, this.box);
    //Set Bounds
    this.player.setBoundsRectangle(0, 0, 600, 400);
    this.enemy.setBoundsRectangle(0, 0, 600, 400);
    this.physics.add.collider(this.player, this.enemy);

    //Add Camera Controls
    this.cameras.main.startFollow(this.player);
    this.makePlats();
    //Add key controls
    this.a = this.add.key('A');
    this.d = this.add.key('D');
    this.w = this.add.key('W');
    this.s = this.add.key('S');

    this.left = this.add.key('LEFT');
    this.right = this.add.key('RIGHT');

    this.up = this.add.key('UP');
    this.down = this.add.key('DOWN');

    this.isEnemyTouchingPlayer = false;

    //Card
    this.card = this.add.rectangle(200, 80, 50, 25, 0xFFF000);
    this.cardText = this.add.text(200, 80, "Card", 0x000000);
    this.cardText.setOrigin(0.5, 0.5);
    //Succes text
    this.succesText = this.add.text(200, 30, "You Win!", 0xFFFFFF)
    this.succesText.setFontSize(50);
    this.succesText.setOrigin(0.5, 0.5);
    this.succesText.visible = false
		this.succesTimer = this.add.timer(3000).pause();
  }

  update() {

    if (this.enemy.intersects(this.player)) {
      this.scene.start("Scene3");
    }
		if (this.succesTimer.isUp()) {
			this.scene.start("Scene2");
		}

    //check if Grounded
    if (this.player.isGrounded()) {
      this.onFloor = true;
    }
    else {
      this.onFloor = false;
    }
    //Player movement
    if (this.w.isPressed() || this.up.isPressed() && this.onFloor == true) {
      this.player.setVelocityY(-30 * this.playspeed);
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
    if (this.enemy.intersects(this.player) == false) {
      if (/*(this.player.y == this.enemy.y) && */(this.player.x > this.enemy.x)) {
        this.enemy.setVelocityX(90);
      }
      if (/*(this.player.y == this.enemy.y) &&*/ (this.player.x < this.enemy.x)) {
        this.enemy.setVelocityX(-90);
      }
    } else {
      this.enemy.setVelocityX(0);

    }
    if (this.player.intersects(this.card)) {
      this.card.visible = false;
      this.cardText.visible = false;
      this.succesText.visible = true;
			this.succesTimer.unpause();
    }
  }


  makePlats() {
    this.platforms = [];
    //let yGap = random(10,30);
    // for (let yPlatformPosition = 10; y < 350; y+=yGap)
    //{
    //  let platformLength = random(20,50);
    //  let platformthickness = random(5,30);
    //  let xPlatformPosition = random(100,500);
    // this.platforms.push(this.add.rectangle(yPlatformPosition, yPlatformPosition, 100, 20, "0xff00ff"));
    //yGap = random(20,50);
    //}
    
    this.platforms.push(this.add.rectangle(500, 300, 100, 20, "0xff00ff"));
    this.platforms.push(this.add.rectangle(100, 300, 100, 20, "0xff00ff"));
    this.platforms.push(this.add.rectangle(300, 230, 150, 20, "0xff00ff"));
    this.platforms.push(this.add.rectangle(300, 400, 600, 100, "0x0000ff"));
    this.platforms.push(this.add.rectangle(200, 130, 150, 20, "0xff00ff"));
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].enablePhysics(true);
    }

    this.physics.add.collider([this.player, this.enemy], this.platforms);

  }
}