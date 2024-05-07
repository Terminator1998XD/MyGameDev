function Init(){
	YaGames.init().then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
		window.dsk = !ysdk.deviceInfo.isDesktop();
    });

    _NewGame();
    $('.overlay').show();
		nextLevel(false);
}

var dsk = true;

function PlayClick(){	
	yabanner(function(){
		_good_ = 0;
	  $('.overlay').hide(500);
		$('#startGame').remove();
		$('#hpbar').css('--p',100);
		openQ();
		StopAllSound();
		PlaySound("0");
	});
}

/*var hideel = ['.stats', '.advbtn'];
var elcc = [];

$(window).resize(function() {
  if ($(window).height() < 300) {
    	for(let i = 0; i < hideel.length; i++){
				let ell = $(hideel[i]);
				if(ell.is(':visible')){
					ell.hide();
					elcc.push(ell);}
			}
  } else {
			for(let i = 0; i < elcc.length; i++){
				elcc[i].show();
			}
			elcc = [];
  }
});*/

function NewGame(){
	yabanner(NewGameCallback);
}

function _NewGame(){
  window.cl = 0;
  ql = [];
	hp = 100;
	$('#hpbar').css('--p',100);
	_good_ = 0;
	window.stat = {"1":0,"2":0,"3":0,"4":0};
}

var __rew = false;
function ContinueGame(){
	__rew = false;
	yarbanner(
		function(){//reward
		__rew = true;
	},function(){//end
		if(__rew){
			$('.overlay').hide(500);
			$('.container').show(500);
			$('#deadscr').hide();
			hp = 100;
			$('.advbtn').hide();
			setTimeout(NextQuist,1000);
			$('#hpbar').css('--p',100);
		}
	});
}

function NewGameCallback(){
  _NewGame();
	StopAllSound();
	PlaySound("0");
	nextLevel(true);
	$('.overlay').hide(500);
	$('#deadscr').hide();
	_good_ = 0;
	
	$('#level').css('--p',0);
	$('#voprn').html("");
}

function RegenAdv(){
	yarbanner(
		function(){//reward
				hp = 100;
				$('#hpbar').css('--p',hp);
				$('.advbtn').hide();
	},function(){//end

	});
}

document.addEventListener('DOMContentLoaded', function() {
  Init();

	$('.advbtn').hide();

  function changeBackground() {
		var bl = 'textures/back/'+getrand(1,6)+'.jpg';
    var randomBackground = "url(" + bl + ")";

    $("body").css("background-image", randomBackground);
  }

  // При загрузке страницы
  changeBackground();

  // По таймеру каждые 5 секунд
  setInterval(function() {
    changeBackground();
  }, 11000);
});

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
			PauseAllSound();
  }else {
  		PlayAllSound();
  }
});

function getrand(min, max) {
  max = max - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
