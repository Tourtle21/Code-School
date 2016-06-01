var a = Math.floor(Math.random() * 100);
var b = Math.floor(Math.random() * 100);
var operator;
var operators = {
    '+': function(a, b) { return a + b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return Math.ceil(a / b) },
    '-': function(a, b) { return a - b },
};
var generateProblem = function() {
	a = Math.floor(Math.random() * 100);
	b = Math.floor(Math.random() * 100);
	switch(Math.floor(Math.random() * 3)) {
		case 0:
			operator = "+"
			break;
		case 1:
			operator = "*"
			break;
		case 2: 
			operator = "/"
			break;
		default: 
			operator = "-"
	}
	console.log(operator)
	$("#operator").text(operator);
	$("#a").text(a);
	$("#b").text(b);
}
var checkAnswer = function () {
	var $input = $("#answer");
	var answer = parseInt($input.val(), 10);
	console.log(answer)
	if (answer === operators[operator](a, b)) {
		alert("Good Job!");
		generateProblem();
	} else {
		alert("incorrect!");
	}
	$input.val("");
};



var $button = $("#check")
$button.click(checkAnswer)
generateProblem();
