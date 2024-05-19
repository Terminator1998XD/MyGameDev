const enemyDistance = 1.5;
var curDist = 0;

function Spawn() {
  curDist+=enemyDistance;
  dim.addGameObject(new Enemy(curDist));
  if(window['P'] != null){
      if(P.speed < 0.08) P.speed += 0.005;
      scoremul += 0.1;
  }
}
