var ysdk = null;
var btnDTC = 0;

function InitYaSDK(){
	console.log('Yandex SDK begin initialized');
	YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
				window.isMobile = !ysdk.deviceInfo.isDesktop() && ysdk.deviceInfo._type != null;
				window.lang = ysdk.environment.i18n.lang;
				translateBlocks();
				fillSettings();
				loadBackgroundTrackPosition();
				setSize();
				window.addEventListener('resize', setSize);
    });
}

document.addEventListener("visibilitychange", function() {
	if(unityInstance == null) return;

	  if (document.visibilityState === "hidden") {
			_Pause();
			pauseMusic();
	  }
	  else if(!advscr){
			_Play();
			playMusic();
	  }
	});

function setSize() {
    var unityContainer = document.getElementById("unityContainer");
		unityContainer.style.position = 'absolute';
    unityContainer.style.width = window.innerWidth + "px";
    unityContainer.style.height = window.innerHeight + "px";
  }

var advscr = false;

function yabanner(end)
{
	if(advscr)return;
  
 if(ysdk == null){
	 end();
	 _Play();
	 return;
 }

 advscr = true;
 pauseMusic();
  ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){
	  end();
	  advscr = false;
	  if(!(document.visibilityState === "hidden"))_Play();
	  playMusic();
	}}});
}

function yarbanner(reward,end)
{
	if(advscr)return;
	
	if(ysdk == null){
	 reward();
	 end();
	 return;
 }

	advscr = true;
	pauseMusic();
  ysdk.adv.showRewardedVideo({callbacks: {
	  onRewarded:function(){
		reward();
	  },
	  onClose: function(){
		end();
		if(!(document.visibilityState === "hidden"))_Play();
		advscr = false;
		playMusic();
	}}});
}
