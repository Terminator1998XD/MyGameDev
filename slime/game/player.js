class Player extends GameObject{
  constructor(){
    super(new Vector3(200,200,1), new Size(64,45));
    this.setAnims([
      new Anim(getTexs('player_1/',7),0.05),
      new Anim(getTexs('player_2/',7),0.05)
    ]);
    this.pos = planet.getVec(0);
    this.OnUpdate = true;
    this.speed = 0.025;
    scoremul = 1;
    this.CalcCenter();

    curDist = 0;

    while(curDist < 4){
      Spawn();//спавним врагов первых
    }
  }

  CalcCenter(){
    this.center = new Vector2(this.pos.x+32,this.pos.y+22.5);
  }

  Update(){
    this.Rotate += this.speed;
    this.pos = planet.getVec(this.Rotate);
    this.CalcCenter();

    if(AnyMouseDown || isKeyDown){
      this.CurrentTexture = this.CurrentTexture == 0 ? 1 : 0;
      AnyMouseDown = false;
      isKeyDown = false;
      PlaySound('step');
    }
  }
}
