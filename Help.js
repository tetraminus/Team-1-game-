class Help extends SimpleScene {
  constructor() {
    super("Help");
  }

  preload() {

  }

  create() {
		this.text = this.add.text(40,50,"Help",0xFFFFFF);
		this.text.setFontSize(40)
		this.text1 = this.add.text(40,100,"\nMovement is easy, just use WASD or UP,DOWN,LEFT,RIGHT\nto move around the map.\n\nMake sure not to touch the blue square,\nit'll reset your game.\n\nCollect the Yellow Key Card to complete level 1.",0xFFFFFF);
		this.text2 = this.add.text(40,300,"Press H to go home",0x00FFFF);
		this.h = this.add.key("H");
  }

  update() {
		if (this.h.wasPressed()) {
			this.scene.start("Scene2");
		}
  }
}