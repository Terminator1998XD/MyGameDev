class Player extends GameObject{
  constructor(){
    super(new Vector3(600,500), new Size(128,66));
    this.startPos = new Vector3(this.pos.x,this.pos.y);
    const cid = SkinMngr.skin;
    this.setTextures([
      getTex("car"+cid+"_no"),
      getTex("car"+cid+"_door"),
      getTex("car"+cid+"_yes")
    ]);

    this.OnUpdate = false;
    this.speed = 12;
    this.rotationSpeed = 0.3;
    this.counter = 0;
    this.driftPlay = false;

    canvas.style.cursor = 'auto';
    new Girl(this);
  }

  Update(){
    const pos = this.pos;
    const dx = Math.cos(this.Rotate)*this.speed, dy = Math.sin(this.Rotate)*this.speed;
    pos.x += dx;
    pos.y += dy;
    this.counter += Math.abs(dx) + Math.abs(dy);

    if(this.counter >= 2500){
      AddScore(1);
      PlaySound('score');
      this.counter = 0;
    }

    const size = this.size;

    if (AnyMouseDown || isKeyDown) {
      const point = new Vector2(mx, my);
      this.Rotate -= 0.1;
      if(!this.driftPlay){
        this.driftPlay = true;
        const _this = this;
        this.driftaudio = PlaySoundOnce('drift', function(){
          _this.driftPlay = false;
        });
      }
    } else if(this.driftPlay && this.driftaudio != null) {
      this.driftaudio.stop();
      this.driftPlay = false;
    }

    if(CarExit(this)){
      pauseMusic();
      if(this.driftPlay && this.driftaudio != null) {
        this.driftaudio.stop();
        this.driftPlay = false;
      }
      PlaySound('lose');
      OnPause = true;
      dead_advprompt();
    }
  }

  Alive(){
      this.pos = new Vector3(this.startPos.x,this.startPos.y);
      this.Rotate = 0;
  }
}
