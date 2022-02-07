class Scene2 extends SimpleScene {
  constructor() {
    super("Scene2");
  }


  preload() {
    this.load.tilemapCSV("Level1", "assets/Maps/MVP.csv");
    this.load.imageset("myTileSet", "assets/Maps/tilemap.png", 21, 21, 0, 2);
  }

  create() {
    this.loadMap();
    this.info = this.add.text(10, 10, "This is Scene2.js", 0xFFFFFF);
  }

  update() {

  }
  loadMap() {
    let grid = this.add.gridLayout(0, 0, 32, 32, 21, 21);
    grid.addTileset("myTileSet");
    this.layer1 = grid.addTileLayer("Level1");
  }
}


