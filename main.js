// Game configuration object 
let config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  backgroundColor: 0x000000,
  scene: [Scene2, Scene1,  Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Help], 
  //scene: [Scene1],
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
  fontFamily: `Arial`,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  }
};

//global data, cards are after level completions
  playspeed = 10;
	card1 = false;
	card2 = false;
	card3 = false;
	card4 = false;
	card5 = false;
// const Team1player = new player();
//Create a Phaser Game using the config
const game = new Phaser.Game(config);

