
$("#clickHere").click(function(){
    $(".clickButton").hide();
});

$("#clickHere").click(function() {
	$(".questions").show();
})

$("#clickHere").click(function(){
	$(".timer").show();
})

var timeRemain = 31;
var countDown = setInterval(function(){
	timeRemain--;
	$("#timeLeft").html(timeRemain + " seconds");
	if (timeRemain === 0){
		clearInterval(countDown);
	}
},1000);


function check(){
	$(".quizDone").show();

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question1.value;
	var question3 = document.quiz.question1.value;
	var correct = 0;
	var incorrect = 0;

	if (question1 == "1") {
		correct++
	}


}

