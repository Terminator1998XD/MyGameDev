let audioc = [];

function StopAllSound(){
	if(window.dsk)return;
	
	for(let i = 0; i < audioc.length; i++){
		audioc[i].pause();
	}
	audioc = [];
}

function PauseAllSound(){
	if(window.dsk)return;
	
	for(let i = 0; i < audioc.length; i++){
		audioc[i].pause();
	}
}

function PlayAllSound(){
	if(!SoundsEnable || window.dsk)return;

	for(let i = 0; i < audioc.length; i++){
		audioc[i].play();
	}
}

function PlaySound(name)
{
	if(SoundsEnable && !window.dsk)
	{
		const a = new Audio("sounds/"+name+".mp3");
		audioc.push(a);
		a.volume = 0.1;
		a.addEventListener("ended", function() {
			audioc.splice(audioc.indexOf(a),1);
		});
		a.play();
	}
}

var SoundsEnable = true;
