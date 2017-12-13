
var secondsLeft = 10;

var intervalId;

var question1 = {question:"What is my name?",
 correct:"Elisheva",
  incorrect:["Bob", "Charlie", "Lara"]};

var classArray = ["c", "i", "i", "i"];

 var form = $("form");

 var quest = $("<p>").text(question1.question);
 

form.append("<br>");
var radioButton = $("<div>");
radioButton.addClass("radio corr");
label = $("<label>");
input = $("<input>");
input.attr("type", "radio");
input.attr("name", "optradio");
input.attr("id", "question1choice1");

label.append(input);

label.append(question1.correct);
radioButton.append(label)


form.append(quest, radioButton);


//do again for other incorrect choices
for (var i = 0; i < question1.incorrect.length; i++) {
	
	radioButton = $("<div>");
	radioButton.addClass("radio incorr");
	label = $("<label>");
	input = $("<input>");
	input.attr("type", "radio");
	input.attr("name", "optradio");
	input.attr("id", "question1"+"choice" + (i));

	label.append(input);

	label.append(question1.incorrect[i]);
	radioButton.append(label)


	form.append( radioButton);
}

// radioButton = $("<div>");
// radioButton.addClass("radio");
// label = $("<label>");
// input = $("<input>");
// input.attr("type", "radio");
// input.attr("name", "optradio");

// label.append(input);

// radioButton.html(question1.correct);
// radioButton.prepend(label)


// form.append(quest, radioButton);




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