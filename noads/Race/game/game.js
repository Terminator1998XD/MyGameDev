function Init(){
	if(window['lang'] != null) return;

	bgc();
	window.lang = 'ru';
	window.scoreui = $('#score');
	window._advprompt = [];
	window.score = 0;
	window.scoremul = 1;

	SkinMngr();
	loadBackgroundTrackPosition();

	let rec = localStorage['record777'];

  if(rec != null && rec > 0){
		$('.record').html(parseInt(rec));
	}
	else{
		$('.myrec').hide();
	}
	$('.mycrec').hide();

	EngineRun();

	$('.overlay').show();

	hideTexts();
	if(window['YaGames'] != null){
		YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
				window.isMobile = !ysdk.deviceInfo.isDesktop() && ysdk.deviceInfo._type != null;
				window.lang = ysdk.environment.i18n.lang;
				translateBlocks();
				$('.govr').hide();
				fillSettings();
				resizeCanvas();
    });
	} else {
		window.isMobile = false;
		translateBlocks();
		fillSettings();
		resizeCanvas();
	}
}

function PlayClick(){
	isKeyDown = false;
	AnyMouseDown = false;
	yabanner(function(){
		$('.menu').hide();
		if(window['P'] == null){
			OnPause = false;
			playMusic();
			if(isMobile) ysdk.adv.hideBannerAdv();
			window.P = new Player();
			player.push(P);
		} else {
			NewGameCallback();
		}
		$('#scoreblock').show();
	});
}

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
		if(!OnPause){
			OnPause = true;
			updlb();
			saveBackgroundTrackPosition();

			if(window['callfunc'] == null && P.OnUpdate){
				window.ContinueCallback = function(){
					timer_go(function(){
						OnPause = false;
						PlaySound('engine');
						playMusic();
					});
				}
			}
		}
		pauseMusic();
		StopAllSound();
  } else if(window['ContinueCallback'] != null){
		window.ContinueCallback();
		window.ContinueCallback = null;
	}
	else if(girlPhasse){
		OnPause = false;
		playMusic();
	}
});

function NewGameCallback(){
	if(isMobile) ysdk.adv.hideBannerAdv();
	dim.map = [];
	window.score = 0;
	window.scoremul = 1;
	window._advprompt = [];
	P = new Player();
	player = [P];
	$('#score').text(0);
	OnPause = false;
}

function ReturnToMenu(){
	updlb();
	$('.menu').show(50);
	$('#scoreblock').hide();
	$('.myrec').show();
	$('.mycrec').show();
	$('.govr').show();
}

function AddScore(_score){
	score += _score * scoremul;
	scoreui.text(parseInt(score));
}

reslist.push('textures/girl.png');

function AddTexArr(name, count){
	for(let i = 0; i < count; i++){
		reslist.push('textures/'+name+i+'.png');
	}
}

function PreInit(){
	resources.load(reslist);
	resources.onReady(Init);
}

document.addEventListener('DOMContentLoaded', function() {
  PreInit();
});
