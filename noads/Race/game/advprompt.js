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
  }, 20);
}

var _advprompt = [];

function dead_advprompt(killer){
  saveBackgroundTrackPosition();

  if(score < 1){
    ReturnToMenu();
    return;
  }

  advprompt('reborn',
  function(){ //accept
    P.Alive();
    timer_go(function(){
      OnPause = false;
      PlaySound('engine');
      playMusic();
    });
  },
  function(){ //deny
    advprompt('scm',
    function(){ //accept
      score = score * 2;
      scoreui.text(parseInt(score));
      ReturnToMenu();      
    },
    ReturnToMenu, false
    );
  });
}

var callfunc = null;

function timer_go(tp){
	window.tm = $('<div id="timer">');
  $('body').append(window.tm);
	window.labels = [];

	for(let i = 0; i < 3; i++){
		let span = $('<span>').html(3-i).hide();
		labels.push(span);
		tm.append(span);
	}

	tm.show(100);
	labels[0].show();
	window.nextlabel = 1;
	window.callfunc = tp;
  canvas.style.cursor = 'auto';

	setTimeout(tmfunc,1200);
}

function tmfunc(){
	if(document.visibilityState === "hidden"){
		setTimeout(tmfunc,1200);
		return;
	}

	window.labels[window.nextlabel-1].hide(200);

	if(window.nextlabel >= window.labels.length){
		window.callfunc();
    window.tm.remove();
    window.callfunc = null;
    canvas.style.cursor = 'pointer';
		return;
	}

	window.labels[window.nextlabel].show(200);
	window.nextlabel+=1;
	setTimeout(tmfunc,1000);
}
