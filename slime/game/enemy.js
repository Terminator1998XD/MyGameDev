class Enemy extends GameObject{
  static colors = [[0,161,204],[204,0,195]]
  constructor(angle){
    super(planet.getVec(angle),new Size(64,45));
    this.color = getrand(1,3);
    this.setAnim(new Anim(getTexs('en'+this.color+'/',8),0.05));
    this.Rotate = angle;
    this.OnUpdate = true;
  }

  Good(){
    dim.map.splice(dim.map.indexOf(this),1);
    Spawn();
    const color = Enemy.colors[this.color - 1];
    for(let i = 0; i < 360; i += 30){
      const rad = i * GradToRad;
      const p = new Particle(this,color, 8);
      p.dir = new Vector2(Math.cos(rad)*10, Math.sin(rad)*10);
      dim.map.push(p);
    }
    AddScore(1);
    PlaySound('bubble');
    if(!Tutorial.end) Tutorial.good();
  }

  NoGood(){
    OnPause = true;
    pauseMusic();
    if(Tutorial.end) dead_advprompt(TXT('dead'))
    else Tutorial.nogood(function(){
      P.Rotate -= 1;
      P.pos = planet.getVec(P.Rotate);
      P.CalcCenter();
      timer_go(function(){
        OnPause = false;
        playMusic();
      });
    });
  }

  Update(){
    if(Vector3.Distance(P.center,new Vector2(this.pos.x+32,this.pos.y+22.5)) < 20){
      if(this.color == P.CurrentTexture + 1) this.Good();
      else this.NoGood();
    }
  }
}
