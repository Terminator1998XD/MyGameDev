var LevelsComplite = 0;

function AddToLead(_rec_){
	if(ysdk!=null)
	  ysdk.getLeaderboards()
	  .then(lb => {
		lb.setLeaderboardScore('lead', parseInt(_rec_));
	  });
	  else console.log("ysdk == null");
}

function updlb(){
  let t = curq();
  let p = t == null ? 100 : parseInt(qlp / t.length * 100);
  if(p > 100) p = 100;

  $('.lvltxt').html(LevelsComplite);
  $('.lvlrange').css('--p', parseInt(LevelsComplite / 4 * 100));
  $('.lvlprogbar').css('--p', p);

  let rec_levels = localStorage['mctest_lc'];
  let rec_progress = localStorage['mctest_prog'];
  let rec_o = localStorage['mctest_o'];

  if(rec_levels == null || rec_progress == null){
    rec_levels = LevelsComplite;
    rec_progress = p;
    localStorage['mctest_lc'] = LevelsComplite;
    localStorage['mctest_prog'] = p;
  }
  
  if(rec_o == null){
	  rec_o = _good_;
	  localStorage['mctest_o'] = rec_o;
	  AddToLead(_good_);
  }
  rec_o = parseInt(rec_o);
  
  if(_good_ > rec_o){
	  rec_o = _good_;
	  localStorage['mctest_o'] = rec_o;
	  AddToLead(_good_);
  }
  
  $('.v1').html(_good_);
  $('.v1r').html(rec_o);

  rec_levels = parseInt(rec_levels);
  rec_progress = parseInt(rec_progress);
  LevelsComplite = parseInt(LevelsComplite);

  if(LevelsComplite > rec_levels){
    rec_levels = LevelsComplite;
    rec_progress = p;
    localStorage['mctest_lc'] = LevelsComplite;
    localStorage['mctest_prog'] = p;
  }
  else if (LevelsComplite == rec_levels) {
    if(p > rec_progress){
      rec_levels = LevelsComplite;
      rec_progress = p;
      localStorage['mctest_lc'] = LevelsComplite;
      localStorage['mctest_prog'] = p;
    }
  }

  $('.lvlrange_rec').css('--p', parseInt(rec_levels/4*100));
  $('.lvlprogbar_rec').css('--p', rec_progress);
  $('.lvltxt_rec').html(rec_levels);
}
