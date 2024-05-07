var levels = ["1","2","3","4"];
var cl = 0;

function CurrentLevel(){
  return levels[cl];
}

function curq(){
  return quists[CurrentLevel()];
}

var ql = [];
var qlp = 0;

function NextQuist(){
  let qlll = curq();

  $('#level').css('--p',parseInt(qlp / qlll.length * 100));
  $('#voprn').html(": Вопрос "+ (parseInt(qlp)+1)+" / " + qlll.length);

  if(qlp == qlll.length){
    cl++;
    LevelsComplite++;
    ql = [];
    qlp = 0;
    updlb();

    if(cl >= levels.length){
      gameComplite();
    }
    else {
      nextLevel(true);
      StopAllSound();
      PlaySound(parseInt(levels[cl])-1);
    }
    return;
  }

  if(ql.length == 0){
      for (var i = 0; i < qlll.length; i++) {
        ql.push(i);
      }
      for (var i = ql.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = ql[i];
          ql[i] = ql[j];
          ql[j] = temp;
    }

    qlp = 0;
  }

  showq(qlll[ql[qlp++]]);
}

var hp = 100;

function Damage(){
  hp -= 20;

  if(hp <= 0){
    hp = 0;
    updlb();
    $('#deadscr').show();
    $('.overlay').show(500);
    $('.container').hide();
  }

  $('#hpbar').css('--p',hp);

  if($(window).height() > 530)
  $('.advbtn').show();
}

var pslock = false;
var _good_ = 0;

function playerSelect(btn){
  if(pslock)return;
  pslock = true;

  let nextTimeout = 1000;

  if(btn.id == 'good'){
    btn.style = 'border:12px solid green';    
    stat[levels[cl]]++;
	_good_++;
  }
  else {
    nextTimeout = 2500;
    btn.style = 'border:12px solid red';
    btnok.style += ';border:6px solid green;';
    Damage();
  }

  if(hp > 0){
    setTimeout(NextQuist,nextTimeout);
  }
}
