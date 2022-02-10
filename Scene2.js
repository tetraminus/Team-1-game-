class Scene2 extends SimpleScene {
  constructor() {
    super("Scene2");

	}

  preload() {
		
  }

  create() {
   this.titleText = this.add.text(100,20,"Mutant Future!",0xFFFFFF);
	 this.titleText.setFontSize(50);
   this.text1 = this.add.text(40,100,"Medical technology has developed the ability to give humans advanced physical abilities. However this capability has gotten out of control and the world has been overtaken by mutant monsters.\nThe protagonist is one of the few surviving humans that has not mutated and has taken upon itself to stop the spread of these creatures and destroy their main breading ground within a nuclear reactor, and can acquire advanced powers to aid in their quest.\nUse your ever increasing arsenal of powers and abilities to navigate and fight through hordes of enemies and vast labyrinths of passageways to stop the spread of these abominations.",0xFFFFFF);
   this.text1.setWidth(550);
	 this.text2 = this.add.text(300,350,"Press ENTER to start",0x00FFFF);
	 this.text3 = this.add.text(100,350,"Press H for help",0x00FFFF);
	 this.enter = this.add.key("ENTER");
	 this.h = this.add.key("H");
  }

  update() {
   if (this.enter.wasPressed()) {
		 this.scene.start("Scene8");
	 }

	 if (this.h.wasPressed()) {
		 this.scene.start("Help");
	 }
  }
}