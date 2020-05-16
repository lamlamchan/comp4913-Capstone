        var canvas = document.getElementById("tutcanvas");
                var ctx = canvas.getContext("2d");
                canvas.width = canvas.width;
                var starttutBtn = document.getElementById('starttutBtn');
                starttutBtn.style.display= 'none';
                var tut1 = new Image();
                var tut2 = new Image();
                var tut3 = new Image();
				var tnumber = 0;
                var Tpic = new String;
                var Tpics = [tut1,tut2,tut3];
                tut1.src = "images/Tutorial_1.png";
                tut2.src = "images/Tutorial_2.png";
                tut3.src = "images/Tutorial_3.png";
         SetQuestions();
    SetQuestions = function(){
        
         Tpic=Tpics[tnumber];
         context.drawImage(Tpic,-10,-10,750,400);
    }
    
        ResetQ= function(){

		lock=false;
		ctx.clearRect(0,0,750,500);
		tnumber++;
		if(tnumber==Tpics.length){EndQuiz();}
		else{
		context.drawImage(quizbg, 0, 0);
		SetQuestions();}

		}
        
        
         