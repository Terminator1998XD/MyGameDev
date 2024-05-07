var btnDTC = 0;
var ysdk = null;

function yabanner(end)
{
  const flag = btnDTC == 0;
  if(!flag&&!btnDTC.check())return;
  if(flag)btnDTC = new DateTimeClock(1);

  if(ysdk == null)
  {
    end();
    return;
  }

  SoundsEnable = false;
  StopAllSound();
  
  ysdk.adv.showFullscreenAdv({callbacks: {
	  onClose: function(){
		  SoundsEnable = true;
		  end();
		  },
	onError: function(error) {
          SoundsEnable = true;
		  end();
        }		  
		  }});
}

function yarbanner(reward,end)
{
  const flag = btnDTC == 0;
  if(!flag&&!btnDTC.check())return;
  if(flag)btnDTC = new DateTimeClock(5);

  if(ysdk == null)
  {
    reward();
    end();
    return;
  }

  SoundsEnable = false;
  PauseAllSound();
  ysdk.adv.showRewardedVideo({callbacks: {onRewarded:reward, onClose: function(){SoundsEnable = true; end(); PlayAllSound();} }});
}
