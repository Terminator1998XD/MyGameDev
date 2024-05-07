function PlayClickPazzle(){
	$('#TEST').hide(500);
	$('#PUZZ').show(500);
	PlaySound(getrand(0,4));
}

function ToTest(){
	$('#TEST').show(500);
	$('#PUZZ').hide(500);
}

function pToMenu(){
	yabanner(function(){
		$('#puzzle-menu').show(500);
		$('#puzzle-container').hide(500);
		$('#puzzle-container > h1').html('Собери пазл');
	});
}
