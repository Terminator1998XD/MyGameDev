var result = 0;
var btnok = 0;
var nook = [];

function showq(quest){
  if(window.tmpcontainer != null){
    window.tmpcontainer.remove();
    window.tmpcontainer = null;
  }

  // Создаем копию .container
  window.tmpcontainer = $('.container');

  if(window.tmpcontainer == null){
    console.log("Ошибка поиска контейнера");
    return;
  }

  var newContainer = window.tmpcontainer.clone();

  // Заполняем информацией о квесте
  // Название квеста
  newContainer.find('.quest-title').text(quest.capt);

  // Изображение квеста
  newContainer.find('.quest-image').attr('src', 'textures/'+quest.img.toLowerCase());

  result = newContainer.find('h2');
  result.hide();

  // Варианты ответов
  var variantsList = newContainer.find('.option');
  nook = [];

  for(let i = 0; i < variantsList.length; i++){
    let btn = variantsList[i];

    btn.innerHTML = '<span>'+quest.variants[i]+'</span>';
    btn.style = '--clr:#FF44CC';

    if(i == quest.valide){
      btn.id = 'good';
      btnok = btn;
    }
    else {
      btn.id = 'nogood';
	  nook.push(btn);
    }
  }

  // Прикрепляем новый container к DOM и отображаем его
  newContainer.appendTo('body').show(500);
  pslock = false;
  // Прячем предыдущий container
  window.tmpcontainer.hide(500);
}

var podslock = false;
function pods(){
	if(podslock)return;
	podslock = true;
	setTimeout(function(){
		$('#TEST .option2').html("Подсказка 50 / 50");
		podslock = false;
	},120*1000);
	btnok.style = 'border:6px solid blue';
	nook[getrand(0,nook.length)].style = 'border:6px solid blue';
	$('#TEST .option2').html("Подсказка покамись недоступна");
}

var lvltitle;
function nextLevel(autoOpen){
  let lvl = CurrentLevel();

  lvltitle=$('#lvl-title-'+lvl).html();
  $('#lvlz').html(lvltitle);
  //$('#lvl-title-'+lvl).show();
  $('#tstx').hide();
  $('.lvl-image').attr('src','textures/gta/'+lvl+'.jpg');

  if(autoOpen){
    $('.container').hide(500);
    $('.lvlinf').show(500);
    openQ();
  }
}

function openQ(){
  setTimeout(function(){
    $('.lvlinf').hide(500);
    NextQuist();
    $('#lvl-title-'+CurrentLevel()).hide();
    $('#tstx').show();
  },2000);
}

function gameComplite(){
  $('#gggame').show();
  $('.overlay').show(1000);
}
