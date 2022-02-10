class Scene3 extends SimpleScene {
  constructor() {
    super("Scene3");

	}

  preload() {
		
  }

  create() {
   this.titleText = this.add.text(75,50,"YOU DIED",0xFFFFFF);
	 this.titleText.setFontSize(100);
   this.text1 = this.add.text(220,200,"you are dead",0xFFFFFF);
   this.text1.setWidth(550);
	 this.text2 = this.add.text(175,350,"Press ENTER to restart",0x00FFFF);
	 this.enter = this.add.key("ENTER");
  }

  update() {
   if (this.enter.wasPressed()) {
		 this.scene.start("Scene8");
	 }
  }
}