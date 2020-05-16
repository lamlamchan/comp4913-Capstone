var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
            var tryAgainBtn = document.getElementById('tryAgainBtn');
       
            function setBgImage() {
                    context.drawImage(bgImage,-5,-10,750,400);
             
                }
            	function clearCanvas() {
canvas.width = canvas.width;
		}
            function initialize(){
                clearCanvas();
                tryAgainBtn.style.display= 'none';
                var canvas = document.getElementById("myCanvas");
                var context = canvas.getContext("2d");
                var startBtn = document.getElementById('startBtn');
				var quizbg = new Image();
                var quizQ1 = new Image();
                var quizQ2 = new Image();
                var gamestartbg = new Image();
				var Question = new String;
                var Qpic = new String;
				var Option1 = new String;
				var Option2 = new String;
				var Option3 = new String;
				var mx=0;
				var my=0;
				var CorrectAnswer = 0;
				var qnumber = 0;
				var rightanswers=0;
				var wronganswers=0;
				var QuizFinished = false;
				var lock = false;
				var textpos1=45;
				var textpos2=145;
				var textpos3=230;
				var textpos4=325;
				var Questions = ["What is the use of the Clique Percolation Method ?","Suppose K = 3, What is the larger communities ?","Suppose K = 3, What is the larger communities ?"];
                var Qpics = [,quizQ1,quizQ2];
				var Options = [["Find larger communities","Find the shortest path","Find the node similarity"],["1,2,3,4","1,2,3,4,5","1,2,3"],["3,4,5,6","1,2,3","1,2,3,4,5,6"]];
                startBtn.style.display= 'none';

                quizbg.src = "quizbg.png";
                quizQ1.src = "images/quiz1.png";
                quizQ2.src = "images/quiz2.png";
                
                quizbg.onload = function(){
                 
			      context.drawImage(quizbg, 0, 0);
				 SetQuestions();

				}//quizbg

				

				SetQuestions = function(){
                    
					Question=Questions[qnumber];
                    Qpic=Qpics[qnumber];
					CorrectAnswer=1+Math.floor(Math.random()*3);

					if(CorrectAnswer==1){Option1=Options[qnumber][0];Option2=Options[qnumber][1];Option3=Options[qnumber][2];}

					if(CorrectAnswer==2){Option1=Options[qnumber][2];Option2=Options[qnumber][0];Option3=Options[qnumber][1];}

					if(CorrectAnswer==3){Option1=Options[qnumber][1];Option2=Options[qnumber][2];Option3=Options[qnumber][0];}
                    

					context.fillStyle = "white"; 
                    context.textBaseline = "middle";
					context.font = "17pt Calibri,Arial";
					context.fillText(Question,20,textpos1);
					context.font = "14pt Calibri,Arial";
					context.fillText(Option1,20,textpos2);
					context.fillText(Option2,20,textpos3);
					context.fillText(Option3,20,textpos4);
                    context.drawImage(Qpic,570,0);

				}//SetQuestions

				canvas.addEventListener('click',ProcessClick,false);
				function ProcessClick(ev) {
				my=ev.y-canvas.offsetTop;
				if(ev.y == undefined){

					my = ev.pageY - canvas.offsetTop;

				}

			if(lock){

				ResetQ();

			}//if lock

			else{

			if(my>110 && my<180){GetFeedback(1);}
			if(my>200 && my<270){GetFeedback(2);}
			if(my>290 && my<360){GetFeedback(3);}

			}//!lock

				}//ProcessClick


		GetFeedback = function(a){

		  if(a==CorrectAnswer){

		  	context.drawImage(quizbg, 0,400,75,70,480,110+(90*(a-1)),75,70);
			rightanswers++;

			//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

		  }

		  else{

		    context.drawImage(quizbg, 75,400,75,70,480,110+(90*(a-1)),75,70);
			wronganswers++;

		  }

		  lock=true;
          
		  context.font = "14pt Calibri,Arial";
		  context.fillText("Click again to continue",20,380);

		}//get feedback


		ResetQ= function(){

		lock=false;
		context.clearRect(0,0,750,500);
		qnumber++;
		if(qnumber==Questions.length){EndQuiz();}
		else{
		context.drawImage(quizbg, 0, 0);
		SetQuestions();}

		}


		EndQuiz=function(){

		canvas.removeEventListener('click',ProcessClick,false);
		context.drawImage(quizbg, 0,0,550,90,0,0,550,400);
		context.font = "20pt Calibri,Arial";
		context.fillText("You have finished the quiz!",20,100);
		context.font = "16pt Calibri,Arial";
		context.fillText("Correct answers: "+String(rightanswers),20,200);
		context.fillText("Wrong answers: "+String(wronganswers),20,240);
        tryAgainBtn.style.display = 'inline';
            
		}

			};
