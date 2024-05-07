function advprompt(text, accept, deny){
  if (_advprompt.includes(text)) {
    deny();
    return;
  }
  _advprompt.push(text);
  text = TXT(text) + "\n" + TXT('adv');

  var procent = 100;
  var interval = null;

  $('body').append(
    $('<div class="advp">').append([
      $('<div class="pbar">').css({'width':(procent+'%')}),
      $('<center>').append($('<button>').css({'display':'block'}).text(text).click(function(){
          clearInterval(interval);
          interval = null;
          $('.advp').remove();
          yarbanner(function(){},accept);
      }))
    ])
  );

  interval = setInterval(function(){
      if(interval == null) return;
      procent--;
      $('.pbar').css({'width':(procent+'%')});
      if(procent == 0){
        clearInterval(interval);
        $('.advp').remove();
        deny();
      }
  }, 40);
}

var _advprompt = [];

function dead_advprompt(score){
  OnPause = true;
  updlb(parseInt(score));
  saveBackgroundTrackPosition();
  advprompt('reborn',
  function(){ //accept
    unityInstance.SendMessage('Player', 'Reborn');
    _Play();
    playMusic();
  },
  function(){ //deny
    advprompt('scm',
    function(){ //accept
      $('#deadscr').show();
      $('.overlay').show(500);
      $('#pausem').hide();
      score = score * 2;
      updlb(score);
      if(isMobile) ysdk.adv.showBannerAdv();
    },
    function(){//deny
      $('#deadscr').show();
      $('.overlay').show(500);
      $('#pausem').hide();
      if(isMobile) ysdk.adv.showBannerAdv();
    }, false
    );
  });
}
