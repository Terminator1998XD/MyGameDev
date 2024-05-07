class Particle extends GameObject{
  constructor(ball){
    super(new Vector3(ball.pos.x + ball.size.w / 2 - 8, ball.pos.y + ball.size.h / 2 - 8,0), new Size(16,16));
    this.a = 1;
    this.dir = new Vector2(0,0);
    this.OnUpdate = true;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.arr = dim.map;
  }

  OnRender(rect){
    this.a -= 0.009;
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
