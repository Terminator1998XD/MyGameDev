let audios = {}

function playMusic() {
  if (isMobile || !UserMusEnable || !SoundsEnable) return;
	if(audios['background'] == null) audios.background = new Audio("../balls/sounds/background.mp3");
  audios.background.volume = MusVolume;
  audios.background.play();
}

function loadBackgroundTrackPosition(){
	if(isMobile) return;
	let savedPosition = localStorage.getItem('backgroundTrackPosition');
	if (savedPosition) {
		let currentPosition = parseFloat(savedPosition);
    if(audios['background'] == null) audios.background = new Audio("../balls/sounds/background.mp3");
		if (currentPosition >= audios.background.duration) {
        currentPosition = 0;
    }
		audios.background.currentTime = currentPosition;
	}
}

function saveBackgroundTrackPosition(){
	if(isMobile) return;
	// Проверяем, загружен ли фоновый трек
	if(audios['background'] != null){
		// Сохраняем текущую позицию трека в localStorage
		localStorage.setItem('backgroundTrackPosition', audios.background.currentTime.toString());
	}
}

function pauseMusic() {
	if(isMobile) return;
  if(audios['background'] != null) audios.background.pause();
}

var SoundsEnable = true;
var UserMusEnable = true;
var UserSoundEnable = true;
const MusVolume = 0.6;

function UserSoundEnableChanged(){
	unityInstance.SendMessage('Player', 'UserSoundEnableChanged', UserSoundEnable ? 1 : 0);
}
