var btnDTC = 0;
var ysdk = null;

function yabanner(end)
{
  const flag = btnDTC == 0;
  if(!flag&&!btnDTC.check())return;
  if(flag)btnDTC = new DateTimeClock(5);

  if(window['ysdk'] == null){
    end();
  }

  pauseMusic();
  SoundsEnable = false;
  StopAllSound();
  ysdk.adv.showFullscreenAdv({callbacks: {onClose: function(){SoundsEnable = true;playMusic(); end();} }});
}

function yarbanner(reward,end, mEnable = true)
{
  const flag = btnDTC == 0;
  if(!flag&&!btnDTC.check())return;
  if(flag)btnDTC = new DateTimeClock(5);

  if(window['ysdk'] == null){
    reward();
    end();
  }

  pauseMusic();
  SoundsEnable = false;
  StopAllSound();
  ysdk.adv.showRewardedVideo({callbacks: {onRewarded:reward, onClose: function(){SoundsEnable = true; if(mEnable){playMusic();} end();} }});
}
