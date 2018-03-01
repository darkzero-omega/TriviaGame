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
    incorrect: "Awwww close but wrong!!!",
    timeOut: "Time Expired!!!",
    testFin: "Man that was tough!! Let's See The Results!!"


};