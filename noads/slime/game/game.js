function Init(){
	if(window['lang'] != null) return;

	window.backgroundTexture = resources.get('textures/back.jpg');
	window.lang = 'ru';
	window.scoreui = $('#score');
	window._advprompt = [];
	window.score = 0;
	window.scoremul = 1;

	canvas.style.cursor = 'pointer';

	Tutorial();
	window.planet = new Planet();
	dim.addGameObject(planet);
	window.P = new Player();
	player = [P];

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

	dim.map = [planet];
	window.score = 0;
	window.scoremul = 1;
	window._advprompt = [];
	window.P = new Player();
	player = [P];

	$('#score').text(0);
	OnPause = false;
}

function AddScore(_score){
	score += _score * scoremul;
	scoreui.text(parseInt(score));
}

function NewGame(){
	yabanner(NewGameCallback);
}

let reslist = [
	'textures/back.jpg', 'textures/planet.png','textures/good.png','textures/nogood.png'
];

function AddTexArr(name, count){
	for(let i = 0; i < count; i++){
		reslist.push('textures/'+name+i+'.png');
	}
}

AddTexArr('player_1/',7);
AddTexArr('player_2/',7);
AddTexArr('en1/',8);
AddTexArr('en2/',8);

function PreInit(){
	resources.load(reslist);
	resources.onReady(Init);
}

document.addEventListener('DOMContentLoaded', function() {
  PreInit();
});
