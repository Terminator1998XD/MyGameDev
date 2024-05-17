class Island extends GameObject{
  constructor(x, w){
    super(new Vector3(x,playerBoundsH,1),new Size(w, 700));
    this.bounds = x+w;
    this.road = null;
    this.OnUpdate = true;
  }

  Remove(){
      dim.map.splice(dim.map.indexOf(this),1);
      if(this.road != null){
        dim.map.splice(dim.map.indexOf(this.road),1);
      }
    }

  OnRender(rect){
    g.fillStyle = 'black';
    g.fillRect(rect.x,rect.y,rect.w,rect.h);
  }

  Update(){
    if(camera.x > this.bounds + 1000){
      this.Remove();
    }
  }
}
