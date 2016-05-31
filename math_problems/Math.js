var a = Math.floor(Math.random() * 100);
var b = Math.floor(Math.random() * 100);
var generateProblem = function() {
	a = Math.floor(Math.random() * 100);
	b = Math.floor(Math.random() * 100);

	document.getElementById("a").innerHTML = a;
	document.getElementById("b").innerHTML = b;
}
var checkAnswer = function () {
	var input = document.getElementById("answer");
	var answer = parseInt(input.value, 10);
	console.log(answer)
	if (answer === a + b) {
		alert("Good Job!");
		generateProblem();
	} else {
		alert("incorrect!");
	}
	input.value = "";
};



var button = document.getElementById("check");
button.onclick = checkAnswer;
generateProblem();
