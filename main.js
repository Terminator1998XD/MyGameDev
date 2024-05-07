function getGameLayout(game){
  const cats = parseCats(game.cat);
  let htmlcats = '';

  for(const c of cats){
    htmlcats += `<div class="gcat">` + c + "</div>";
  }

  const {name,img} = game;

  return $(`
    <div class="game">
      <div class="demo"><img src="${img}"></img></div>
      <div class="name">${name}</div>
      <div class="gcats">
        ${htmlcats}
      </div>
    </div>
  `).click(()=>opengame(game));
}

function opengame(game){
  window.open(game.href,'_blank');
  ym(97218325, 'reachGoal', 'opengame '+ game.name);
}

function parseCats(cats){
  cats = cats.split(',');
  const ret = [];

  for(const cat of cats)
  ret.push($('.cat[tag="'+cat+'"]').text());

  return ret;
}

$(document).ready(function(){

  $('.cat').click(function(e){
    $('.cat-select').removeClass('cat-select');
    const c = $(e.target).addClass('cat-select').attr('tag');
    opencat(c);
    ym(97218325, 'reachGoal', 'swcat_'+c);
  });

  opencat(',');
});

function opencat(catname){
  const c = $('.content').html('');

  for(const game of games){
    if(game.cat.includes(catname)){
      c.append(getGameLayout(game));
    }
  }

  c[0].scrollTo(0,0);
}
