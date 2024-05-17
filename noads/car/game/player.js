const playerPosY = 1000;
const playerSizeH = 91;
const playerBoundsH = playerPosY+playerSizeH;
class Player extends GameObject{
  constructor(){
    super(new Vector3(10,playerPosY,1),new Size(256,playerSizeH));
    this.setTexture(getTex('player'+SkinMngr.skin));
    prew = new Island(0,isMinSizeW);
    dim.addGameObject(prew);
    Generate();
    this.OnUpdate =true;
    this.roadCreate = false;
    this.camerato = 0;
    this._go = false;
    this.goodpos = new Vector3(this.pos.x,this.pos.y,1);
    this.cx = camera.x;
    this.cs = 'auto';
  }

  Go(){
    this._go = true;
    PlaySound('car');
  }

  Alive(){
    this.road.OnUpdate = false;
    this.Rotate = 0;
    this.pos.x = prew.pos.x;
    this.pos.y = this.goodpos.y;
    this.camerato = this.pos.x;
    this.roadCreate = false;
    camera.x = this.pos.x - 600;
    Generate();
  }

  Update(){

    const pc = !isMobile;
    if(pc || !Tutorial.end){
      const setCursor = this._go ? 'auto' : 'pointer';

      if(setCursor != this.cs){
        if(pc)canvas.style.cursor = setCursor;
        this.cs = setCursor;
        if(!Tutorial.end)Tutorial.finger();
      }
    }

    if(this._go){
      if(this.pos.x < this.road.ex){
         this.pos.x += SkinMngr.speed;
         if(this.pos.x + this.size.w >= CameraFovW) camera.x += SkinMngr.speed;
      }
      else if(this.pos.x >= prew.pos.x && this.pos.x <= prew.bounds){
        this.pos.x = prew.pos.x;
        this._go = false;
        this.camerato = this.pos.x;
        this.roadCreate = false;
        this.goodpos = new Vector3(this.pos.x,this.pos.y,1);
        this.cx = camera.x;
        AddScore(1);
        updlb();
        Generate();
        if(!Tutorial.end){
          Tutorial.good();
        }
      }
      else{
        this.Rotate = -90*GradToRad;
        this.pos.x-=this.size.w / 2;
        this.road.turn = true;
        this.road.OnUpdate = true;
        this.road.pos.x+=25;
        this._go = false;
        PlaySound('clc2');
      }
    }

    if(this.pos.y+this.size.h >= 1600){
      PlaySound('br');
      OnPause = true;
      canvas.style.cursor = 'auto';

      if(Tutorial.end){
        PlaySound('lose');
        pauseMusic();
        dead_advprompt();
      } else {
        Tutorial.nogood(function(){
          P.Alive();
          OnPause = false;
        });
      }
    }

    if(this.camerato > camera.x){
      camera.x += 25;
      if(this.camerato < camera.x){
        camera.x = this.camerato;
      }
    }

    if(AnyMouseDown && !this.roadCreate){
      this.roadCreate = true;
      this.road = new Road();
      block.road = this.road;
      PlaySound('clc1');
      dim.addGameObject(this.road);
    }
  }
}
