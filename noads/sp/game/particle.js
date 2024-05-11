class Particle extends GameObject{
  constructor(ball,color, size){
    super(new Vector3(ball.pos.x + ball.size.w / 2 - size/2, ball.pos.y + ball.size.h / 2 - size/2,0), new Size(size,size));
    this.a = 1;
    this.dir = new Vector2(0,0);
    this.OnUpdate = true;
    this.r = color[0];
    this.g = color[1];
    this.b = color[2];
    this.arr = dim.map;
  }

  OnRender(rect){
    this.a -= 0.029;
    g.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    g.fillRect(rect.x, rect.y, rect.w, rect.h);

    if(this.a < 0.03){
      this.arr.splice(this.arr.indexOf(this),1);
    }
  }

  Update(){
    this.pos.x += this.dir.x * 0.5;
    this.pos.y += this.dir.y * 0.5;
  }
}
