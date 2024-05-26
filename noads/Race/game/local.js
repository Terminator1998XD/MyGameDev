var txt = {
  "ru":{
    reborn: "Последний шанс",
    scm: "Умножить очки x2",
    adv:"за рекламу",
    on: "Вкл.",off: "Выкл.",
    mus: "Музыка", snd: "Звуки",
    pipe:"Вы столкнулись с трубой",
    shle:"След"
  },
  "en":{
    scm:"Multiply points x2",
    adv:"for viewing ads",
    reborn:"Second life",
    on: "On",off: "Off",
    mus: "Music", snd: "Sounds",
    pipe:"You have encountered a pipe",
    shle:"Trace"
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
