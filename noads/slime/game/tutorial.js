var good = $('<div class="tutorial">').hide();
var nogood = $('<div class="tutorial">').hide();

document.body.appendChild(good[0]);
document.body.appendChild(nogood[0]);

function Tutorial(){
  var hgood = false;
  var hnogood = false;
  var n = 0;

  Tutorial.good = function(){
    good.show(500);
    setTimeout(function(){
      good.hide(500);
      hgood = true;
      n++;
      Tutorial.end = hgood && hnogood || n > 5;

      if(Tutorial.end) setTimeout(function(){
        good.remove();
        nogood.remove();
      },500);
    },1000);
  }

  Tutorial.nogood = function(callback){
    nogood.show(500);
    setTimeout(function(){
      nogood.hide(500);
      hnogood = true;
      Tutorial.end = hgood && hnogood;

      if(callback != null) {
         setTimeout(callback,500);
      }

      if(Tutorial.end) setTimeout(function(){
        good.remove();
        nogood.remove();
      },500);

    },1000);
  }

  Tutorial.end = false;

  good.append(getTex('good'));
  nogood.append(getTex('nogood'));
}
