
$("#clickHere").click(function(){
    $(".clickButton").hide();
});

$("#clickHere").click(function() {
	$(".questions").show();
})

$("#clickHere").click(function(){
	$(".timer").show();
})

var timeRemain = 31; // setting this to 31 because the first # user sees on countdown is 30
var countDown = setInterval(function(){
	timeRemain--;
	$("#timeLeft").html(timeRemain + " seconds");
	if (timeRemain === 0){
		clearInterval(countDown);
		$("#submit").click()
	}

},1000);






$("#submit").click(function check(){
	$(".quizDone").show();
	$(".questions").hide();
	$(".timer").hide();


	var correct = 0
	var incorrect = 0



	if (  $("input[value=1]").is(":checked")    ) {
		correct++;
		
		}
	 
	if ( $("input[value=7]").is(":checked")) {
		correct++
	}
	if ( $("input[value=11]").is(":checked")) {
		correct++
	}
	if ( $("input[value=16]").is(":checked")) {
		correct++
	}

	incorrect = (4 - correct)

	$("#correctAnswer").html("You answered " + correct + " correctly")
	$("#incorrectAnswer").html("You answered " + incorrect + " incorrectly")


})




// function check(){
// 	$(".quizDone").show();

// 	var question1 = document.quiz.question1.value;
// 	var question2 = document.quiz.question1.value;
// 	var question3 = document.quiz.question1.value;
// 	var correct = 0;
// 	var incorrect = 0;

// 	if (question1 == "1") {
// 		correct++
// 	}


// }

