class Girl extends GameObject{
  constructor(pl){
    super(new Vector3(pl.pos.x+pl.size.w/2-32,pl.pos.y + 190,2),new Size(64,64));
    this.setTexture(getTex('girl'));
    window.girl = this;
    dim.map.push(this);
    this.OnUpdate = true;
    this.pl = pl.pos.y+pl.size.h+5;
    PlaySound('horn');
    girlPhasse = true;
  }

  SetTask(){
    P.CurrentTexture = 1;
    setTimeout(function(){
      P.CurrentTexture = 2;
      P.OnUpdate = true;
      canvas.style.cursor = 'pointer';
      PlaySound('engine');
      dim.map.splice(dim.map.indexOf(girl),1);
      girlPhasse = false;
    },500);
  }

  Update(){
    if(this.pos.y > this.pl){
      this.pos.y -= 10;
      if(this.pos.y <= this.pl){
        this.pos.y = this.pl;
        this.OnUpdate = false;
        this.SetTask();
      }
    }
  }
}

var girlPhasse = false;
