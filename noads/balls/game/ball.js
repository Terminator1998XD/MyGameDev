class Ball extends GameObject{
  constructor(parent, color){
    const size = new Size(64,64);
    super(new Vector3(parent.pos.x+parent.size.w/2-size.w/2,10,4), size);
    this.color = colors[getrand(0,colors.length)];
    this.OnUpdate = true;
    this.parent = parent;
    this.ppos = parent.pos;
    this.psize = parent.size;
    this.pdtc = new DateTimeClock(0.25);
    this.pc = getrand(0,11);
    this.goodflag = false;
    this.iter = 0;
    this.bad = false;
  }

  OnRender(rect){
    g.fillStyle = this.color;
    if(this.bad && this.pdtc.check()){
      const t = this.color;
      this.color = this.lc;
      this.lc = t;
    }

    g.beginPath();
    g.arc(rect.x + rect.w / 2, rect.y + rect.h / 2, rect.w / 2, 0, 2 * Math.PI); // Используем координаты и размеры для расчета радиуса и центра круга
    g.fill();
    g.closePath();
  }

  Good(){
    PlaySound('bubble');
    dim.map.splice(dim.map.indexOf(this),1);

    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const matches = this.color.match(regex);
    const [_, r, g, b] = matches;

    AddScore(1);
    lvlProgress();

    for(let i = 0; i < 360; i += 30){
      const rad = i * GradToRad;
      const p = new Particle(this);
      p.dir = new Vector3(Math.cos(rad)*10, Math.sin(rad)*10);
      p.r =r;
      p.g =g;
      p.b =b;
      p.arr = player;
      player.push(p);
    }
  }

  Bad(){
    if(this.bad){
      return;
    }
    this.lc = 'red';
    this.bad = true;
    if(window.gameover){
      return;
    }
    window.gameover = true;
    pauseMusic();
    PlaySound('lose');
    OnPause = true;
    dead_advprompt(TXT('res'));
  }

  static gravity = 7;

  Update(){
    this.pos.y += Ball.gravity;

    if(this.goodflag && this.pos.y >= (this.ppos.y + this.psize.h/2 - 20)){
      this.Good();
      return;
    }

    if(this.pos.x >= this.pos.x && this.pos.y >= this.ppos.y && this.pos.x <= this.ppos.x+this.psize.w && this.pos.y <= this.ppos.y+this.psize.h){
        if(this.parent.color == this.color){
          this.goodflag = true;
        }
        else this.Bad();
    }
    else if(this.pdtc.check()){
      this.pc++;
      const p = new Particle(this);
      p.dir = this.pc % 2 == 0 ? new Vector2(-1,-1) : new Vector2(1,-1);
      dim.addGameObject(p);
    }
  }
}
