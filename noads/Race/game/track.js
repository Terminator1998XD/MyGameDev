const dontExit = new Rectangle(76,86,1155,575);
const dontEnter = new Rectangle(247,255,794,217);

function CarExit(Car) {

  const pos = Car.pos;
  const size = Car.size;
  const a = Car.Rotate;
  let front = new Vector2(pos.x + size.w/2 + Math.cos(a)*size.w/2, pos.y + size.h / 2 + Math.sin(a)*size.h/2);

  return dontEnter.Contains(front) || !dontExit.Contains(front);
}
