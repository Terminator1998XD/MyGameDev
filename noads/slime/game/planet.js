class Planet extends GameObject{
  constructor(){
    super(new Vector3(1280/2.0-405/2.0,100), new Size(405,405));
    this.center = new Vector2(this.pos.x+this.size.w/2,this.pos.y+this.size.h/2);
    this.setTexture(getTex('planet'));
  }

  getVec(angle){
    angle -= 90 * GradToRad;
    const radiusX = this.size.w / 2;
    const radiusY = this.size.h / 2;
    const centerX = this.center.x - 25;
    const centerY = this.center.y - 25;

    const x = centerX + Math.cos(angle) * radiusX;
    const y = centerY + Math.sin(angle) * radiusY;

    return new Vector3(x, y, 1);
  }
}
