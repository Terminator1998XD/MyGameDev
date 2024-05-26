var canvas = document.createElement("canvas");
var g = canvas.getContext("2d");
document.body.appendChild(canvas);

resizeCanvas();

var isMobile = false;

window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.scaleX = canvas.width/1280;
    window.scaleY = canvas.height/720;
}

var LMouseDown = false;
var RMouseDown = false;
var AnyMouseDown = false;
var GameSpeed = 1;

var mx = 0, my = 0;
canvas.addEventListener('mousedown', function(event) {
  AnyMouseDown = true;
  const rect = event.currentTarget.getBoundingClientRect();
  mx = (event.clientX - rect.left) / scaleX; // Получаем координату X точки нажатия мышью
  my = (event.clientY - rect.top) / scaleY; // Получаем координату Y точки нажатия мышью
});

canvas.addEventListener('mousemove', function(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  mx = (event.clientX - rect.left) / scaleX; // Получаем координату X точки нажатия мышью
  my = (event.clientY - rect.top) / scaleY; // Получаем координату Y точки нажатия мышью
});

canvas.addEventListener('touchstart', function(event) {
  event.preventDefault();
  AnyMouseDown = true;
  const rect = event.currentTarget.getBoundingClientRect();
  const touch = event.touches[0]; // Получаем первое касание
  mx = (touch.clientX - rect.left) / scaleX; // Получаем координату X точки касания
  my = (touch.clientY - rect.top) / scaleY; // Получаем координату Y точки касания
});

canvas.addEventListener('mouseup', function(event) {
  AnyMouseDown = false;
});

canvas.addEventListener('touchend', function(event) {
  event.preventDefault();
  AnyMouseDown = false;
});

var dim = new Dim(0);
var player = [];
var effects = [];

var camera = new Vector2(0,0);
var CameraFovW = 0;
var CameraFovH = 0;
var scaleX = 1;
var scaleY = 1;

const RadToGrad = 180.0/Math.PI;
const GradToRad = Math.PI/180.0;

var OnPause = true;

function Render()
{
	g.resetTransform();
	g.scale(scaleX, scaleY);

  g.drawImage(backgroundTexture,0,0,1280,720);

  g.shadowColor = 'black';
  g.shadowBlur = 5;
  g.shadowOffsetX = 5;
  g.shadowOffsetY = 5;

	CameraFovW = camera.x + canvas.width * (1/scaleX);
	CameraFovH = camera.y + canvas.height * (1/scaleY);

	DrawArray(dim.map);
  DrawArray(effects);
	DrawArray(player);

	for (let i = 0; i < ShootEffect.pool.length; i++) {
	  const effect = ShootEffect.pool[i];

	  g.beginPath();
	  g.strokeStyle = effect.color;
	  g.lineWidth = 5;
	  g.moveTo(effect.x1 - camera.x, effect.y1 - camera.y);
	  g.lineTo(effect.x2 - camera.x, effect.y2 - camera.y);
	  g.stroke();

	  effect.Clear(i);
	}

  g.resetTransform();

	requestAnimationFrame(Render);
}

function DrawArray(curmap) {
  for (let obj = 0; obj < curmap.length; obj++) {
    const drawable = curmap[obj];

    if (drawable !== null && drawable.Visible) {
      const LastScreenSpace = {
        x: drawable.pos.x,
        y: drawable.pos.y,
        w: drawable.size.w,
        h: drawable.size.h
      };

      if (
        LastScreenSpace.x >= camera.x - LastScreenSpace.w &&
        LastScreenSpace.y >= camera.y - LastScreenSpace.h &&
        LastScreenSpace.x - LastScreenSpace.w <= CameraFovW &&
        LastScreenSpace.y - LastScreenSpace.h <= CameraFovH
      ) {
        const tx = LastScreenSpace.x - camera.x + LastScreenSpace.w / 2;
        const ty = LastScreenSpace.y - camera.y + LastScreenSpace.h / 2;

        g.translate(tx, ty);
        const Rotate = drawable.Rotate;
        if (Rotate !== 0) g.rotate(Rotate);

        LastScreenSpace.x = tx;
        LastScreenSpace.y = ty;
        drawable.LastScreenSpace = LastScreenSpace;

        const rect = new Rectangle(-drawable.size.w / 2, -drawable.size.h / 2, LastScreenSpace.w, LastScreenSpace.h);

        drawable.OnRender(rect);

        if (Rotate !== 0) g.rotate(-Rotate);
        g.translate(-tx, -ty);
      }
    }
  }
}

function ObjectCumShoot(obj) {
  camera.x = clamp(obj.pos.x - canvas.width/ scaleX  / 2 + obj.size.w / 2, 0, 2416-1280);
  camera.y = 0;//clamp(obj.pos.y - canvas.height/ scaleY / 2 + obj.size.h / 2, 0, 656);
}

function ObjectCumShoot2(obj) {
  camera.x = 0;
  camera.y = obj.pos.y - canvas.height;
}

function VectorCumShoot(position) {
  camera.x = position.x - canvas.width / 2;
  camera.y = position.y - canvas.height / 2;
}

function VectorCumShoot(position) {
  camera.x = position.x - canvas.width / 2;
  camera.y = position.y - canvas.height / 2;
}

function ObjectCumFollow(obj) {
  const followX = obj.pos.x - canvas.width / 2 + obj.size.w / 2;
  const followY = obj.pos.y - canvas.height / 2 + obj.size.h / 2;

  if (camera.x !== followX) camera.x=BeginCumFollow(camera.x, followX);
  if (camera.y !== followY) camera.y=BeginCumFollow(camera.y, followY);
}

var FollowSpeed = 5;

function BeginCumFollow(axis, val) {
  if (Math.abs(axis - val) > FollowSpeed) {
    if (axis > val)
      axis -= FollowSpeed;
    else
      axis += FollowSpeed;
  } else {
    axis = val;
  }

  return axis;
}

function Update()
{
	if (!OnPause) {

		for (let obj = 0; obj < dim.map.length; obj++) {
		  const u = dim.map[obj];

		  if (u.OnUpdate) u.Update();
		}

		for (let obj = 0; obj < effects.length; obj++) {
		  effects[obj].Update();
		}

		for (let i = 0; i < player.length; i++) {
			const p = player[i];
			if(p.OnUpdate)p.Update();
		  }
	}
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function EngineRun()
{
	Render();
	setInterval(Update, 1000/20);
}

function getrand(min, max) {
  max = max - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var reslist = [];
