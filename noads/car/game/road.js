class Road extends GameObject{
  constructor(){
    super(new Vector3(block.bounds - 10, block.pos.y,2),new Size(10,10));
    this.OnUpdate = true;
    this.drop = false;
    this.Rot = -90*GradToRad;
    this.turn = false;
  }

  Remove(){
      dim.map.splice(dim.map.indexOf(this),1);
    }

  OnRender(rect){
    g.translate(rect.x,rect.y);
    g.rotate(this.Rot);
    g.fillStyle = 'red';
    g.fillRect(0,0,rect.w,rect.h);
    g.rotate(-this.Rot);
    g.translate(-rect.x,-rect.y);
  }

  Update(){
    if(this.turn){
      this.Rot += 0.2;
      if(this.Rot >= 90*GradToRad){
        this.Rot = 90*GradToRad;
        P.pos.y += 30;
      }
      return;
    }

    if(this.drop){
      this.Rot += 0.2;
      this.pos.y = block.pos.y - 10;

      if(this.Rot >= 0){
        this.Rot = 0;
        this.OnUpdate = false;
        this.ex = this.pos.x+this.size.w;
        PlaySound('ready');
        P.Go();
      }

      return;
    }

    if(AnyMouseDown){
      this.size.w += 30;
      if(this.size.w > ddist) this.size.w += 30;
      if(this.size.w > 970) this.size.w = 970;
    } else {
      this.drop = true;
      PlaySound('clc2');
    }
  }
}
