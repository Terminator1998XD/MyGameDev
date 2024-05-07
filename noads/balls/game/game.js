function Init(){
	if(window['lang'] != null) return;

	window.backgroundTexture = getTex('back');
	window.lang = 'ru';
	window.scoreui = $('#score');
	window._advprompt = [];
	window.score = 0;
	window.scoremul = 1;

	window.pleft = new Controller(true);
	window.pright = new Controller(false);
	player = [pleft,pright];

	loadBackgroundTrackPosition();

	let rec = localStorage['record777'];

  if(rec != null && rec > 0){
			$('.record').html(parseInt(rec));
	}
	else{
		$('#startGame .record').parent().remove();
	}

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
				$('#scoreblock').show();

				if(!window.isMobile){
					$('body').css({'background-image': 'url("textures/htmlback.jpg")','background-size':'cover'});
					const neonColor = 'rgb(255, 255, 255)'; // Здесь вы можете выбрать цвет неона
					const border = '1px solid white';
					$(canvas).css({
					  'box-shadow': `0 0 10px ${neonColor}`,
					  'border-left': border,
					  'border-right': border
					});
				}

				translateBlocks();
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
	yabanner(function(){
		document.getElementById("startGame").remove();
		$('.overlay').hide();
		OnPause = false;
		playMusic();
		if(isMobile) ysdk.adv.hideBannerAdv();
		pleft.CreateBubble();
		pright.CreateBubble();
		pleft.spawndtc.check();
		pright.spawndtc.check();
		window.gameover = false;
		window.prog = 0;
	});
}

function TogglePause(){
	OnPause = !OnPause;
	saveBackgroundTrackPosition();

	if(OnPause){
		updlb();
		$('.overlay').show(500);
		$('#pausem').show();
	}
	else {
		$('.overlay').hide();
		$('#pausem').hide();
		playMusic();
		pleft.spawndtc.check();
		pright.spawndtc.check();
	}
}

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") {
		if(!OnPause){
			OnPause = true;
			updlb();
			$('.overlay').show(500);
			$('#pausem').show();
		}
		pauseMusic();
		StopAllSound();
  }
});

function NewGameCallback(){
	$('.overlay').hide();
	$('#deadscr').hide();
	$('#pausem').hide();

	if(isMobile) ysdk.adv.hideBannerAdv();

	dim.map = [];
	window.score = 0;
	window.scoremul = 1;
	window._advprompt = [];
	window.gameover = false;
	window.prog = 0;
	pleft.spawndtc.seconds = 5;
	pright.spawndtc.seconds = 5;
	Ball.gravity = 7;

	$('#score').text(0);
	pleft.CreateBubble();
	pright.CreateBubble();
	pleft.spawndtc.check();
	pright.spawndtc.check();
	OnPause = false;
}

function AddScore(_score){
	score += _score * scoremul;
	scoreui.text(parseInt(score));
}

function lvlProgress(){
	prog++;

	if(prog == 10){
		window.scoremul = 2;
		pleft.spawndtc.seconds = 4;
		pright.spawndtc.seconds = 4;
	}
	else if(prog == 20){
		window.scoremul = 4;
		pleft.spawndtc.seconds = 3;
		pright.spawndtc.seconds = 3;
		Ball.gravity = 10;
	}
}

function NewGame(){
	yabanner(NewGameCallback);
}

let reslist = [
	'textures/back.png', 'textures/player.png'
];

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
