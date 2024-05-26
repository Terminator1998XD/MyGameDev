function SkinMngr(){

  function changeSkin(){
    $('.bird img').attr('src','textures/car'+SkinMngr.skin+'_no.png');
    localStorage['skin'] = SkinMngr.skin;
  }

  if(localStorage['skin'] != null){
    SkinMngr.skin = parseInt(localStorage['skin']);
    changeSkin();
  }
  else{
    SkinMngr.skin = 0;
    changeSkin();
  }

  $('.bl').click(function(){
    SkinMngr.skin--;
    if(SkinMngr.skin < 0){
      SkinMngr.skin = SkinMngr.scount - 1;
    }
    changeSkin();
  });
  $('.br').click(function(){
    SkinMngr.skin++;
    if(SkinMngr.skin >= SkinMngr.scount){
      SkinMngr.skin = 0;
    }
    changeSkin();
  });
}

SkinMngr.scount = 5;
for(let i = 0; i < SkinMngr.scount; i++){
  const cid = "textures/car"+i;
  reslist.push(cid+"_no.png");
  reslist.push(cid+"_yes.png");
  reslist.push(cid+"_door.png");
}
