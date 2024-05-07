class Puzzle {
  static _id = 0;
      constructor(name) {
        this.id = Puzzle._id++;
        this.name = name;
        this.compiteflag = localStorage['qcflag'+this.id];
        if(this.compiteflag == null)this.compiteflag = 0;
        else this.compiteflag = parseInt(this.compiteflag);

        this.parts = [];
		this.createPuzzlePieces('textures/'+name);
      }

    complite(){
        $('#puzzle-container-inner > *').hide(250);
        $('#puzzle-container-inner').append($(this.prew).clone().css({'display':'none','width':'100vw','height':'80vh'}).show(250));
        $('#puzzle-container > h1').html('Молодец! Ты собрал пазл');
        localStorage['qcflag'+this.id] = 1;
        this.mydiv.prepend(proidenCaptRender())
    }

	  addToMenu(){
        const _this = this;
        const div = $('<div>').css({'display':'inline-block'});
        if(this.compiteflag == 1) div.append(proidenCaptRender());
        div.append(this.prew)
        this.mydiv = div;

		    $('#puzzle-menu button').before(div);

        $(this.prew).click(function(){
            _this.parts = suffarr(_this.parts);
            CurrentPuzzle = _this;

            let inner = $('#puzzle-container-inner').html('');

            for(let i = 0; i < 9; i++){
              inner.append(pazlPartRender(i));
              _this.parts[i].attr('style',_this.parts[i].attr('tempstyle')).draggable();
              inner.append(_this.parts[i]);
            }

            pazlCounter = 0;

            yabanner(function(){
          		$('#puzzle-menu').hide(500);
          		$('#puzzle-container').show(500);
          	});
        });
	  }

      createPuzzlePieces(imageUrl) {
        const image = new Image();
        image.src = imageUrl;
		    this.prew = image;
        const _this = this;

        image.onload = () => {
          const pieceWidth = image.width / 3;
          const pieceHeight = image.height / 3;

          let I = 0;
          for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
              const canvas = document.createElement("canvas");
              canvas.width = pieceWidth;
              canvas.height = pieceHeight;
              const context = canvas.getContext("2d");
              context.drawImage(image,col * pieceWidth,  row * pieceHeight,pieceWidth,pieceHeight,0,0,pieceWidth,pieceHeight);

              _this.parts.push(pazlPartRender2(canvas,I,row,col));
              I++;
            }
          }

		        _this.addToMenu();
        }
      }
}

const puzzles = [
	new Puzzle("1.jpg"),
	new Puzzle("2.jpg"),
	new Puzzle("end.jpg"),
	new Puzzle("stev.jpg"),
	new Puzzle("torg.jpg"),
	new Puzzle("yt1.jpg"),
	new Puzzle("yt3.jpg"),
	new Puzzle("yt4.jpg")
]

function suffarr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
