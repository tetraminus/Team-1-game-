class Scene1 extends SimpleScene {
  constructor() {
    super("Scene1");
  }


  preload() {
    

  }

  create() {
    this.makePlats();
  }

  update() {

  }

  makePlats() {
    let platforms = [];
    platforms.push(this.add.rectangle(500,300,100,20,"0xff00ff"));
    platforms.push(this.add.rectangle(100,300,100,20,"0xff00ff"));
    platforms.push(this.add.rectangle(300,200,100,20,"0xff00ff"));
    platforms.push(this.add.rectangle(300,400,600,100,"0x0000ff"));


  }
}
