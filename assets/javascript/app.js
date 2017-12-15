
var secondsLeft = 100;

var intervalId;

var question1 = {question:"1. Thanksgiving occurs on the:",
correct:"Fourth Thursday in November",
incorrect:["Third Thursday in November", "November 26 each year"]};

var question2 = {question:"2. The first Thanksgiving lasted:",
correct:"3 days",
incorrect:["1 day", "2 days"]};

var question3 = {question:"3. Which of the following was NOT served at the Pilgrims Thanksgiving meal?",
correct:"Cranberries, corn, and mashed potatoes",
incorrect:["Rabbit, chicken, wild turkey, and dried fruit", "Venison, fish, goose"]};

var question4 = {question:"4. Which Indian tribe taught the Pilgrims how to cultivate the land and were invited to the Thanksgiving meal?",
correct:"Wampanoag",
incorrect:["Apache", "Cherokee"]};

var question5 = {question:"5. Approximately how many turkeys are eaten each year on Thanksgiving in the United States??",
correct:"280 million",
incorrect:["500 million", "100 million"]};

var question6 = {question:"6. Which southern state was the first to adopt a Thanksgiving Day in 1855?",
correct:"Virginia",
incorrect:["South Carolina", "Georgia"]};

var question7 = {question:"7. What utensil was not used by the Pilgrims to eat Thanksgiving dinner?",
correct:"Fork",
incorrect:["Knife", "Spoon"]};

var question8 = {question:"8. What is a baby turkey called?",
correct:"A poult",
incorrect:["A chick", "A nestling"]};

var question9 = {question:"9. It has been estimated that how many Americans eat turkey at Thanksgiving?",
correct:"88%",
incorrect:["50%", "75%"]};

var question10 = {question:"10. A full grown turkey has about how many feathers?",
correct:"3,500",
incorrect:["A million", "Too many to count!"]};

var array = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
console.log(array);


var form = $("form");

//for each question object in the array
for (var j = 0; j < array.length; j++) {

	// add the question
	var quest = $("<p>").text(array[j].question);
	var section = $("<section>");

	form.append("<br>");
	form.append(quest);

	//for each radio button/ choice
	//loop through to create radio buttons and display
	for (var i = 0; i < 3; i++) {

		var radioButton = $("<div>");

		label = $("<label>");
		input = $("<input>");
		input.attr("type", "radio");
		input.attr("name", "optradio" + (j+1));
		input.attr("id", "question"+(j+1)+"choice" + (i+1));

		label.append(input);

	// first iteration is the correct choice
	if (i == 0){

		radioButton.addClass("radio corr");
		label.append(array[j].correct);
	}

		// all the other iterations are the incorrect choices
		else{
			radioButton.addClass("radio incorr");
			label.append(array[j].incorrect[i-1]);
		}

		radioButton.append(label)

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

//submit button
var submitButton = $("<button>");
submitButton.addClass("btn btn-outline-primary");
submitButton.attr("id", "submit");
submitButton.text("Submit");
form.append("<br>", submitButton);

function run(){
	intervalId = setInterval(decrement, 1000);
}

function decrement() {

	secondsLeft--;
	//display the time left
	$("#show-number").html("<h2> Time Left: " + secondsLeft + " Seconds</h2>");

	if (secondsLeft === 0) {

		stop();

		console.log("Time Up!");
	}
}

$(document).ready(function() {

	$("#submit").on("click", function() {
			//if submit button is clicked
			stop();
		});
});

function calculateResults(){

	var counter = 0;
	var incorrectCounter = 0;

  //for each question
  for (var i = 0; i < array.length; i++) {
    var x = document.getElementById("question"+(i+1)+"choice1").checked;
    var y = document.getElementById("question"+(i+1)+"choice2").checked;
    var z = document.getElementById("question"+(i+1)+"choice3").checked;
    //if x is true, it means that a correct answer was checked
    if (x){
    	counter++
    }

		//calculate how many were answered incorrectly so 
		// can see how many unanswered
		else if ((y)||(z)){
			incorrectCounter++
		}
	}
	
	displayResults(counter, incorrectCounter)
};

function displayResults(right, wrong){

	var results = $("<section class='results'>");
	numCorrect = $("<h2 class='numCorrect'>");
	numCorrect.html("Correct Answers: " + right);
	numIncorrect = $("<h2 class='numIncorrect'>");
	numIncorrect.html("Incorrect Answers: " + (wrong));
	numUnanswered = $("<h2 class='numUnanswered'>");
	numUnanswered.html("Unanswered: " + (array.length - right - wrong));
	results.append(numCorrect, numIncorrect, numUnanswered);
	$(".display-info").html(results);
	console.log(numIncorrect);
}

function stop() {

	calculateResults();
	clearInterval(intervalId);
}

run();