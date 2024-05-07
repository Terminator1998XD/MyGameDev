class Controller extends GameObject{
  constructor(isLeft){
    const w = 162 * 1.5;
    const h = 154 * 1.5;
    super(new Vector3(isLeft ? 100 : (800 - w),1600 - h - 100),new Size(w,h));
    this.setTexture(getTex('player'));
    this.isLeft = isLeft;
    this.color = colors[0];
    this.colorIndex = 0;
    this.OnUpdate = true;
    this.key1 = isLeft ? 'KeyA' : 'KeyD';
    this.key2 = isLeft ? 'ArrowLeft' : 'ArrowRight';
    this.inputdtc = new DateTimeClock(0.25);
    this.spawndtc = new DateTimeClock(5);
    this.curInObj = false;
  }

  turn(){
    PlaySound('step');
    if(this.isLeft){
      this.colorIndex++;
      if(this.colorIndex >= colors.length){
        this.colorIndex = 0;
      }
        this.Rotate -= 90 * GradToRad;
    }
    else{
      this.colorIndex--;
      if(this.colorIndex < 0){
        this.colorIndex = colors.length - 1;
      }
      this.Rotate += 90 * GradToRad;
    }

    this.color = colors[this.colorIndex];
  }

  Update(){
    if((isKeyDown[this.key1] || isKeyDown[this.key2])&&this.inputdtc.check()){
      this.turn();
    }

    if(mx >= this.pos.x && my >= this.pos.y && mx <= this.pos.x+this.size.w && my <= this.pos.y+this.size.h){
      canvas.style.cursor = 'pointer';
      this.curInObj = true;
      if(AnyMouseDown){
          this.turn();
          AnyMouseDown = false;
      }
    } else if(!this.isLeft){
      if(!pleft.curInObj) canvas.style.cursor = 'auto';
      this.curInObj = false;
    }
    else{
      this.curInObj = false;
    }

    if(this.spawndtc.check()){
      this.CreateBubble();
    }
  }

  CreateBubble(){
    dim.addGameObject(new Ball(this));
  }
}

const colors = ['rgb(38, 127, 0)','rgb(220, 113, 255)','rgb(255, 56, 171)','rgb(104, 124, 255)'];
