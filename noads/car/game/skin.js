function SkinMngr(){
  SkinMngr.skin = 0;
  SkinMngr.speed = 15;
  SkinMngr.speeds = [15,15,30,30,35,30,28,20];

  function changeSkin(){
    if(window['P']!=null) P.setTexture(getTex('player'+SkinMngr.skin));
    $('.bird img').attr('src','textures/player'+SkinMngr.skin+'.png');
    SkinMngr.speed = SkinMngr.speeds[SkinMngr.skin];
    localStorage['skin'] = SkinMngr.skin;
  }

  if(localStorage['skin'] != null){
    SkinMngr.skin = parseInt(localStorage['skin']);
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

SkinMngr.scount = 8;
