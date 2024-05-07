var txt = {
  "ru":{
    res:'Шарик был не того цвета, который вы выбрали',
    reborn: "Последний шанс",
    scm: "Умножить очки x2",
    adv:"за рекламу",
    on: "Вкл.",off: "Выкл.",
    mus: "Музыка", snd: "Звуки"
  },
  "en":{
    res:'The ball was not the same color, which one you chose',
    scm:"Multiply points x2",
    adv:"for viewing ads",
    reborn:"Second life",
    on: "On",off: "Off",
    mus: "Music", snd: "Sounds"
  }
}

function TXT(id){
  return txt[lang][id];
}

function hideTexts(){
  $('[translate]').hide();
}

function translateBlocks(){
    $('[translate]').each(function() {
    if(lang != 'ru'){
      var value = $(this).attr('translate');
      $(this).html(value);
    }
    $(this).show();
  });
}
