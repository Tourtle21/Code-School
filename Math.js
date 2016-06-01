var turns = 0;
var player = 1;
var buttons = true;
var board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
var gameOver = false;
var reload = function() {
	location.reload();
};
var checkWinningSet= function(player, i1, j1, i2, j2, i3, j3) {
	var cell1 = board[i1][j1]
	var cell2 = board[i2][j2]
	var cell3 = board[i3][j3]
	if (cell1 == player && cell2 == player && cell3 == player) {
		console.log(i1, j1, i2, j2, i3, j3)
		console.log(document.getElementsByClassName(i2 + (j2 * 3)))
		document.getElementsByClassName(i1 + (j1 * 3))[0].style.backgroundColor = "green";
		document.getElementsByClassName(i2 + (j2 * 3))[0].style.backgroundColor = "green";
		document.getElementsByClassName(i3 + (j3*3))[0].style.backgroundColor = "green";
		gameOver = true;
		document.getElementById("winner").innerHTML = "Player " + player + " wins!";
		if (buttons) {
			var button = document.createElement("button");
			document.body.appendChild(button);
			button.innerHTML = "Play Again";
			button.onclick = reload;
			buttons = false;
		}
	}
}
var checkWinner = function () {
	checkWinningSet(player, 0, 0, 0, 1, 0, 2);
	checkWinningSet(player, 1, 0, 1, 1, 1, 2);
	checkWinningSet(player, 2, 0, 2, 1, 2, 2);
	checkWinningSet(player, 0, 0, 1, 0, 2, 0);
	checkWinningSet(player, 0, 1, 1, 1, 2, 1);
	checkWinningSet(player, 0, 2, 1, 2, 2, 2);
	checkWinningSet(player, 0, 0, 1, 1, 2, 2);
	checkWinningSet(player, 0, 2, 1, 1, 2, 0);
}
var setCellClickHandler = function(td, row, col) {
	var cellClicked = function() {
		if (this.innerHTML == "" && !gameOver) {

			turns += 1;
			if (player == 1){
				document.getElementById("winner").innerHTML = "It is player 2's turn";
			}
			if (player == 2) {
				document.getElementById("winner").innerHTML = "It is player 1's turn";
			}
			if (player == 2 && !gameOver) {
				board[row][col] = 2;
				this.innerHTML = "O";
				this.style.backgroundColor = "orange";
				checkWinner();
				player = 1;
			}
			else if (!gameOver){
				board[row][col] = 1;
				this.innerHTML = "X";
				this.style.backgroundColor = "orange";

				checkWinner();
				player = 2;
			}
			if (turns == 9 && !gameOver) {
			for (var i = 0; i <= 8; i++) {
				document.getElementsByTagName("td")[i].style.backgroundColor = "red"			
			};
			
			alert("It's a cats game")
			var button = document.createElement("button");
			document.body.appendChild(button);
			button.innerHTML = "Play Again";
			button.onclick = reload;
		}
		};
		


	};
	
	td.onclick = cellClicked;
};

var table = document.createElement("table");
document.body.appendChild(table);
document.getElementById("winner").innerHTML = "It is player 1's turn";
var td = document.createElement("td");
for (var i = 0; i < 3; i++) {
	var tr = document.createElement("tr");
	table.appendChild(tr);
	for (var j = 0; j < 3; j++) {
		var td = document.createElement("td");
		tr.appendChild(td);
		td.className = i + (j * 3)
		
		setCellClickHandler(td, i, j);
	}
}
