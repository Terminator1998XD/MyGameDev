class Player extends GameObject{
  constructor(){
    super(new Vector3(450-75,400,1),new Size(128,128));
    this.setTexture(getTex('player'));
    this.Rotate = 45*GradToRad;
    this.AnimateRot = this.Rotate;
    this.OnUpdate = true;
    this.ToLeft = true;
    this.camoffset = 0;
    window.P = this;
    window.nextGenerator = 0;
    Generate();
    camera.y -= 600;
    P.pos.y -= 600;
  }

  Lose(){
    OnPause = true;
    this.Visible = false;
    pauseMusic();
    PlaySound('explode');
    PlaySound('lose');
    new VisualEffect(this.pos,eblow);
    dead_advprompt(TXT('bor'));
  }

  Update(){
    const dirX = Math.cos(this.Rotate);
    const dirY = Math.sin(this.Rotate);
    this.pos.x += dirX*15;
    this.pos.y += dirY*15;
    //camera.y += dirY;
    const p = new Particle(this,[255,255,0],16);
    p.dir = new Vector2(-dirX*50, -dirY*50);
    dim.addGameObject(p);

    if(this.pos.x < 0 || this.pos.x + this.size.w > 900){
      this.Lose();
      return;
    }

    if(AnyMouseDown || isKeyDown){
      this.ToLeft = !this.ToLeft;
      this.camoffset = this.pos.y - 400;
      if(this.ToLeft){
        this.AnimateRot = 45*GradToRad;
      } else{
        this.AnimateRot = (90+45)*GradToRad;
      }
      AddScore(1);
      PlaySound('step');
      AnyMouseDown = false;
      isKeyDown = false;
    }

    if(this.Rotate > this.AnimateRot){
      this.Rotate -= 0.1;
      if(this.Rotate < this.AnimateRot) this.Rotate = this.AnimateRot;
    } else if(this.Rotate < this.AnimateRot){
      this.Rotate += 0.1;
      if(this.Rotate > this.AnimateRot) this.Rotate = this.AnimateRot;
    }

    if(this.camoffset > camera.y){
      camera.y += 20;
      if(this.camoffset < camera.y)camera.y = this.camoffset;
    }

    Generate();
  }
}
