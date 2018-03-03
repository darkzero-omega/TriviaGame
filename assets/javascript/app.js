//--Decide Trivia Game Subject --//
//-- Make 10 Questions --//
//-- Variable for all the questions --//
//-- Make Start Button --//
//-- Make Timer --//
//--            --//

var triviaQuestions = [{
	question: "Who was the first Captian of the Enterpise when Star-Trek aired?",
	answerList: ["Kirk", "Spock", "Khan", "Pike"],
	answer: 3
},{
	question: "According to Nichelle Nichols, who counseled her to turn down Broadway, and stay aboard the USS Enterprise as Lt. Uhura??",
	answerList: ["Martin Luther King Jr.", "John F. Kennedy ", "Wilt Chamerlain.", "Ghandi"],
	answer: 0
},{
	question: "In 'What You Leave Behind,' the final episode of Star Trek: Deep Space Nine, how does Odo want Kira to remember him?",
	answerList: ["Fondly",  "In a Tuxedo", "As a good man", "In his pajamas"],
	answer: 1
},{
	question: "In the acclaimed Star Trek episode, 'City on the Edge of Forever,' what Depression Era Earth slang word does Captain Kirk not understand?",
	answerList: ["Flop", "Dame", "Sock-Hop", "Hip Cat"],
	answer: 0
},{
	question: "In how many Star Trek episodes does Captain Kirk appear shirtless?",
	answerList: ["48", "72", "13", "143"],
	answer: 2
},{
	question: "In Gene Roddenberry's original treatment for Star Trek, what was the name of the Starship?",
	answerList: ["Defiant", "Yorktown", "Excelsior", "Plymouth"],
	answer: 1
},{
	question: "Who invented warp drive?",
	answerList: ["Barclay", "Zefram Cochrane", "Dr. Arridor", "Surak"],
	answer: 1
},{
	question: "Who was the first actor to play a member of all three of the major alien races in Star Trek?",
	answerList: ["Peter Dinklage", "Gene Rodenberry", "Mark Lenard", "Peter Sohn"],
	answer: 2
},{
	question: "Which Star Trek captain has an artificial heart?",
	answerList: ["Sisko", "Kirk", "Janeway", "Picard"],
	answer: 3
},{
	question: "Which Star Trek actor originally devised the Klingon language?",
	answerList: ["Mark Leonard", "James Doohan", "Leonard Nimoy", "Michael Dorn"],
	answer:1

}];

var picArray = [ 'question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var currentQuestion; var rightAnswer; var wrongAnswer; var unAnswered; var seconds; var time; var answered; var userSelect;
var messages = {
    correct:"Correct! Way to go!!!",
    incorrect: "Awwww close, but wrong!!!",
    timeOut: "Time Expired!!!",
    testFin: "Man that was tough!! Let's See The Results!!"


};

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#rightAnswers').empty();
	$('#wrongAnswers').empty();
	$('#unAnswered').empty();
	currentQuestion = 0;
	rightAnswer = 0;
	wrongAnswer = 0;
	unAnswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#pics').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#pics').html('<img src = "assets/images/'+ picArray[currentQuestion] +'.jpg" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		rightAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		wrongAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unAnswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#rightAnswers').html("Correct Answers: " + rightAnswer);
	$('#wrongAnswers').html("Incorrect Answers: " + wrongAnswer);
	$('#unAnswered').html("Unanswered: " + unAnswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}
