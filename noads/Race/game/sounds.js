let audioc = [];
const audios = {
  horn: new Howl({src: ["sounds/carhorncur.ogg"], html5: false, preferWebAudio: true}),
  lose: new Howl({src: ["sounds/lose.wav"], html5: false, preferWebAudio: true}),
  score: new Howl({src: ["sounds/score.ogg"], html5: false, preferWebAudio: true}),
  engine: new Howl({src: ["sounds/enginestart.ogg"], html5: false, preferWebAudio: true}),
  drift: new Howl({src: ["sounds/drift.ogg"], html5: false, preferWebAudio: true})
};

function StopAllSound() {
  for (let i = 0; i < audioc.length; i++) {
    audioc[i].stop();
  }
  audioc = [];
}

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

function PlaySound(name, vol = 1) {
  if (SoundsEnable && UserSoundEnable) {
    const a = audios[name.toLowerCase()];
    a.volume(vol);
    audioc.push(a);
    a.on("end", function() {
      audioc.splice(audioc.indexOf(a), 1);
    });
    a.play();
  }
}

function PlaySoundOnce(name, callback, vol = 1) {
  if (SoundsEnable && UserSoundEnable) {
    const a = audios[name.toLowerCase()];
    a.volume(vol);
    audioc.push(a);
    a.on("end", function() {
      audioc.splice(audioc.indexOf(a), 1);
      callback();
    });
    a.play();

    return a;
  }

  return null;
}

var SoundsEnable = true;
var UserMusEnable = true;
var UserSoundEnable = true;
const MusVolume = 0.6;
