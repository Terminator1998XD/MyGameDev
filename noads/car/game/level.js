var prew = 0;
var block = 0;
var ddist = 0;
const isMinSizeW = 350;
function Generate(){
  const sizew = isMinSizeW;
  block = prew;
  prew = new Island(getrand(prew.bounds + 100, prew.bounds + 900-sizew),sizew);
  ddist = prew.pos.x - block.bounds;
  dim.addGameObject(prew);
}
