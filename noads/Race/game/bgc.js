function bgc(){
  var id = localStorage['backgroundID'] == null ? 0 : parseInt(localStorage['backgroundID']);
  onChanged();

  function onChanged(){
    window.backgroundTexture = resources.get('textures/bg'+id+'.png');
  }

  $('#bgleft').click(function(){
    id--;
    if(id < 0) id = bgc.count - 1;
    onChanged();
  });

  $('#bgright').click(function(){
    id++;
    if(id >= bgc.count) id = 0;
    onChanged();
  });
}

bgc.count = 4;
AddTexArr('bg',bgc.count);
