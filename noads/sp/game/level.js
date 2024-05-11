function Generate() {
  if(P.pos.y > window.nextGenerator-2920){
    GenerateIn(window.nextGenerator, 1700)
    window.nextGenerator = window.nextGenerator + 1700;
  }
}

function GenerateIn(start,len){
    const end = start+len;
    console.log("Begin generate");
    for(var y= start+200; y < end; y+=200){
      for(var x = 10; x < 780; x += 256){
        if(getrand(0, 100) < 35){
          const c = new Col(new Vector3(x,y,1));
          dim.addGameObject(c);
        }
      }
    }
}
