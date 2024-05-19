class ShootEffect {
  static pool = [];

  constructor(delay, x1, x2, y1, y2) {
    this.color = this.generateRandomColor();
    this.delay = delay;
	this.x1 = x1;
	this.x2 = x2;
	this.y1 = y1;
	this.y2 = y2;
    ShootEffect.pool.push(this);
  }

  generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  Clear(index) {
    this.color = `rgb(${this.delay + 100},${this.r},${this.g},${this.b})`;

    this.delay--;
    if (this.delay === 0) {
      ShootEffect.pool.splice(index, 1);
    }
  }
}

class VisualEffect extends GameObject {
  constructor(pos, effect) {
    super(pos, new Size(effect[0].width, effect[0].height));
    this.setAnim(new Anim(effect,0.05));
    effects.push(this);
  }

  OnRender(rect)
  {
    super.OnRender(rect);

    if(this.animData[0].currentFrame == this.animData[0].frameCount)
    {
      effects.splice(effects.indexOf(this), 1);
    }
  }
}
