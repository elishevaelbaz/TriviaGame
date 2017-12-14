
var secondsLeft = 10;

var intervalId;

var question1 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};

var question2 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};

var question3 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};

var question4 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};

var question5 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};

var question6 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};

var question7 = {question:"What is my name?",
correct:"Elisheva",
incorrect:["Bob", "Charlie", "Lara"]};


var classArray = ["c", "i", "i", "i"];

var form = $("form");

for (var j = 0; j < 7; j++) {

// the question
var quest = $("<p>").text((question1).question);
var section = $("<section>");


form.append("<br>");
form.append(quest);


//do again for other incorrect choices
for (var i = 0; i <= question1.incorrect.length; i++) {

	var radioButton = $("<div>");
// section.append(radioButton);
if (i == 0){
	radioButton.addClass("radio corr");
	label = $("<label>");
	input = $("<input>");
	input.attr("type", "radio");
	input.attr("name", "optradio" + (i+1));
	input.attr("id", "question"+(j+1)+"choice1");

	label.append(input);

	label.append(question1.correct);
	radioButton.append(label)
}

else{
	
	radioButton = $("<div>");

	radioButton.addClass("radio incorr");
	label = $("<label>");
	input = $("<input>");
	input.attr("type", "radio");
	input.attr("name", "optradio" + (i+1));
	input.attr("id", "question"+(j+1)+"choice" + (i+1));

	label.append(input);

	

	label.append(question1.incorrect[i-1]);

	
	radioButton.append(label)
}

	//randomize the order of the choices
	var rand = Math.floor(Math.random()*2);
	console.log(i + "" + rand);
	if (rand == 0){


		section.append(radioButton);
	}
	else{
		section.prepend(radioButton);
	}

	

	
	form.append(section);
}
}


function run(){
	intervalId = setInterval(decrement, 1000);
}

function decrement() {

	secondsLeft--;

	$("#show-number").html("<h2>" + secondsLeft + "</h2>");

	if (secondsLeft === 0) {

		stop();

		console.log("Time Up!");

        // need to give number this value again, becuase otherwise when time is up, if user hits return, it will decrement from 0
        // and display negaive numbers
        // secondsLeft = 100;
    }
}

function stop() {

	clearInterval(intervalId);
}

run();