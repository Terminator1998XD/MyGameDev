class Col extends GameObject{
  constructor(pos){
    super(pos,new Size(64,64));
    this.isnlo = getrand(0,100) < 8;
    this.center = new Vector2(pos.x+32,pos.y+32);

    if(this.isnlo){
      this.setTexture(getTex('nlo'));
    }
    else this.setTexture(getTex('meteors/tile_'+getrand(0,6)));

    this.OnUpdate = true;
  }

  Remove(){
    dim.map.splice(dim.map.indexOf(this),1);
  }

  Update(){
    if(this.pos.y < camera.y - this.size.h){
      this.Remove();
    }

    const ppos = new Vector2(P.pos.x+64,P.pos.y+64);
    const mypos = this.center;
    const pdist = Vector3.Distance(ppos,mypos);
    if(this.isnlo){
      if(pdist < 400){
        if(ppos.x > mypos.x){
          this.pos.x += 5;
        } else {
          this.pos.x -= 5;
        }

        if(ppos.y > mypos.y){
          this.pos.y += 5;
        } else {
          this.pos.y -= 5;
        }
        this.center = new Vector2(this.pos.x+32,this.pos.y+32);
      }
    }
    else this.Rotate += 0.2;

    if(pdist < 80){
        OnPause = true;
        pauseMusic();
        PlaySound('explode');
        PlaySound('lose');
        dead_advprompt(TXT('col'));
    }
  }

  static DelInRadius(pos){
    const radius = 512;
    const arr = Array.from(dim.map);
    for(let i = 0; i < arr.length; i++){
      const m = arr[i];

      if(Vector3.Distance(pos,m.pos) < radius && m instanceof Col){
        m.Remove();
      }
    }
  }
}
