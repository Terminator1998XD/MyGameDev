var pazlCounter;
var CurrentPuzzle;

function pazlPartRender(num){
  let float = "unset";

  if(num == 0 || num == 3 || num == 6) float = 'left';
  else if(num == 2 || num == 5 || num == 8) float = 'right';

  return $('<div>').attr('class','pazlPart').attr('num',num).css({'float':float}).droppable({
    drop: function(event, ui) {
      event.preventDefault();
      let part = ui.draggable;
      let parton = $(this);

      console.log("Перетаскиваемый элемент:", part);
      console.log("Целевой элемент:", parton);

      if(part.attr('num') == parton.attr('num')){
          pazlCounter++;

          if(pazlCounter == 9){
            CurrentPuzzle.complite();
          }

          parton.append(
            part.css({
              'width': '100%',
              'height': '100%',
              'position': 'unset',
              'top': 'unset',
              'left': 'unset',
              'border':'unset'
            })
          );
      }
    }
  });
}

function pazlPartRender2(part, index, row, col) {
  let css = {
    'width': '16vw',
    'height': '13vh',
    'position': 'absolute',
    'left': (row * 18) + 'vw',
    'top': (30 + col * 14) + 'vh',
    'border': '0.2vw solid black'
  };

  let cssStr = convertToCssString(css);
  
  $(window).resize(function() {
	  let windowWidth = $(window).width();
	  let windowHeight = $(window).height();
	  let elementWidth = $(part).outerWidth();
	  let elementHeight = $(part).outerHeight();
	  let leftOffset = $(part).offset().left;
	  let topOffset = $(part).offset().top;

	  // Проверяем, чтобы элемент не выходил за пределы экрана по горизонтали
	  if (leftOffset < 0) {
		$(part).css('left', 0);
	  } else if (leftOffset + elementWidth > windowWidth) {
		$(part).css('left', windowWidth - elementWidth);
	  }

	  // Проверяем, чтобы элемент не выходил за пределы экрана по вертикали
	  if (topOffset < 0) {
		$(part).css('top', 0);
	  } else if (topOffset + elementHeight > windowHeight) {
		$(part).css('top', windowHeight - elementHeight);
	  }
	});

  return $(part).attr('num', index).attr('style',cssStr).attr('tempstyle',cssStr)
  .draggable({
  containment: "parent",
  drag: function(event, ui) {
      let windowWidth = $(this).parent().width();
      let windowHeight = $(this).parent().height();
      let elementWidth = $(this).outerWidth();
      let elementHeight = $(this).outerHeight();
      let leftOffset = ui.offset.left;
      let topOffset = ui.offset.top;

      // Проверяем, чтобы элемент не выходил за пределы экрана по горизонтали
      if (leftOffset < 0) {
        ui.position.left = 0;
      } else if (leftOffset + elementWidth > windowWidth) {
        ui.position.left = windowWidth - elementWidth;
      }

      // Проверяем, чтобы элемент не выходил за пределы экрана по вертикали
      if (topOffset < 0) {
        ui.position.top = 0;
      } else if (topOffset + elementHeight > windowHeight) {
        ui.position.top = windowHeight - elementHeight;
      }	
	}
  });
}

function proidenCaptRender(){
  return $('<div>').html('\u2714Пройден').css({'position':'relative', 'top':'7vh','color':'white','font-size':'5vh','text-shadow': '4px 4px 4px rgba(0, 0, 0, 0.5)'});
}

function convertToCssString(cssObject) {
  let cssString = '';

  for (let prop in cssObject) {
    if (cssObject.hasOwnProperty(prop)) {
      cssString += prop + ': ' + cssObject[prop] + '; ';
    }
  }

  return cssString.trim();
}
