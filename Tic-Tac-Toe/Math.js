$(document).ready(function() {
	var turns = 0;
	var player = 1;
	var buttons = true;
	var board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
	var gameOver = false;
	var computerOn = false;
	var available = [0, 1, 2, 3, 4, 5, 6, 7, 8]
	var used = [];
	var reload = function() {
		location.reload();
	};
	var computer = function() {
		if (board[1][1] == 1 && turns == 1) {
			console.log("center")
			var spaces = [0, 2, 6, 8]
			var number = spaces[Math.floor(Math.random() * spaces.length)]
			var $span = $("<span></span>").text("O");
			$span.hide().appendTo($("." + number)).fadeIn();
			$("." + number).css("background-color", "orange");
			index = available.indexOf(number);
			available.splice(index, 1);
			board[number%3][Math.floor(number/3)] = 2;
		}
		else if ((board[0][0] == 1 || board[2][0] == 1 || board[0][2] == 1 || board[2][2] == 1) && turns ==1) {
			console.log("corner")
			var spaces = [1, 3, 5, 7]
			var number = spaces[Math.floor(Math.random() * spaces.length)]
			var $span = $("<span></span>").text("O");
			$span.hide().appendTo($("." + number)).fadeIn();
			$("." + number).css("background-color", "orange");
			index = available.indexOf(number);
			available.splice(index, 1);
			board[number%3][Math.floor(number/3)] = 2;
		}
		else {
			var close = checkClose();
			player = 1;
			var badClose = checkClose();
			player = 2;
			if (close == -1) {
				close = 0;
			}
			if (badClose == -1) {
				badClose = 0;
			}

			if (available == []) {
				var $button = $("<button></button>");
				$("body").append($button)
				$button.text("Play Again");
				$button.click(reload);
				buttons = false;
			}
			if (close !== false && $("." + close).text() == "") {
				var $span = $("<span></span>").text("O");
				$span.hide().appendTo($("." + close)).fadeIn();
				$("." + close).css("background-color", "orange");
				index = available.indexOf(close);
				available.splice(index, 1);
				board[close%3][Math.floor(close/3)] = 2;
			}
			else if (badClose !== false && $("." + badClose).text() == "") {
				var $span = $("<span></span>").text("O");
				$span.hide().appendTo($("." + badClose)).fadeIn();
				$("." + badClose).css("background-color", "orange");
				index = available.indexOf(badClose);
				available.splice(index, 1);
				board[badClose%3][Math.floor(badClose/3)] = 2;
			}
			else {
				var number = available[Math.floor(Math.random() * available.length)]
				if (number !== undefined) {
					var $span = $("<span></span>").text("O");
					$span.hide().appendTo($("." + number)).fadeIn();
					$("." + number).css("background-color", "orange");
					index = available.indexOf(number);
					available.splice(index, 1);
					board[number%3][Math.floor(number/3)] = 2;
				}
			}
			checkWinner();
		}

	}
	var checkClose = function () {
		var list = [checkCloseSet(player, 0, 0, 0, 1, 0, 2),
		checkCloseSet(player, 1, 0, 1, 1, 1, 2),
		checkCloseSet(player, 2, 0, 2, 1, 2, 2),
		checkCloseSet(player, 0, 0, 1, 0, 2, 0),
		checkCloseSet(player, 0, 1, 1, 1, 2, 1),
		checkCloseSet(player, 0, 2, 1, 2, 2, 2),
		checkCloseSet(player, 0, 0, 1, 1, 2, 2),
		checkCloseSet(player, 0, 2, 1, 1, 2, 0),]
		for (var i = list.length - 1; i >= 0; i--) {
			if (list[i] != false) {
				return list[i];
			}
		};
		return false;


	}
	var checkCloseSet = function(player, i1, j1, i2, j2, i3, j3) {
		var cell1 = board[i1][j1]
		var cell2 = board[i2][j2]
		var cell3 = board[i3][j3]
		if (cell1 == player && cell2 == player && board[i3][j3] == 0)  {
			return (i3 + (j3 * 3));
		}
		else if (cell1 == player && cell3 == player && board[i2][j2] == 0) {
			return (i2 + (j2 * 3));
		}
		else if (cell2 == player && cell3 == player && board[i1][j1] == 0) {
			if ((i1 + (j1 * 3)) == 0) {
				return (-1);
			}
			return (i1 + (j1 * 3));
		}
		else {
			return false;
		}
	}
	var checkWinningSet = function(player, i1, j1, i2, j2, i3, j3) {
		var cell1 = board[i1][j1]
		var cell2 = board[i2][j2]
		var cell3 = board[i3][j3]
		if (cell1 == player && cell2 == player && cell3 == player) {
			$("." + (i1 + (j1 * 3))).css("background-color", "green");
			$("." + (i2 + (j2 * 3))).css("background-color", "green");
			$("." + (i3 + (j3 * 3))).css("background-color", "green");
			gameOver = true;
			$("#winner").text("Player " + player + " wins!");
			if (buttons) {
				var $button = $("<button></button>");
				$("body").append($button)
				$button.text("Play Again");
				$button.click(reload);
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
	var setCellClickHandler = function($td, row, col) {
		$td.click(function() {
			if ($(this).text() == "" && !gameOver) {

				turns += 1;
				if (player == 1){
					$("#winner").text("It is player 2's turn");
				}
				if (player == 2) {
					$("#winner").text("It is player 1's turn");
				}
				if (player == 2 && !gameOver && !computerOn) {
					board[row][col] = 2;
					var $span = $("<span></span>").text("O");
					$span.hide().appendTo($(this)).fadeIn();
					$(this).css("background-color", "orange");
					checkWinner();
					player = 1;
				}

				else if (!gameOver && player == 1){
					board[row][col] = 1;
					index = available.indexOf(row + (col * 3))
					available.splice(index, 1)
					var $span = $("<span></span>").text("X");
					$span.hide().appendTo($(this)).fadeIn();
					$(this).css("background-color", "orange");

					checkWinner();
					player = 2;
				}
				if (computerOn && !gameOver) {
					computer();
					checkWinner();
					player = 1;
					turns += 1;
				}
				if (turns >= 9 && !gameOver) {
					$("td").css("background-color", "red");


					$("#winner").text("It's cats game")
					var $button = $("<button></button>");
					$("body").append($button)
					$button.text("Play Again");
					$button.click(reload);
			}
		};



	});


	};
	document.addEventListener("keydown", function(e) {
		if (e.which == 67) {
			computerOn = true;
		}
	});
	setTimeout(start, 1000)
	function start() {
			var $table = $("<table></table>");
			$("body").append($table);
			$("#winner").text("It is player 1's turn")
			var $td = $("<td></td>")
			for (var i = 0; i < 3; i++) {
				var $tr = $("<tr></tr>")
				$table.append($tr);
				for (var j = 0; j < 3; j++) {
					$td = $("<td></td>")
					$tr.append($td);
					$td.addClass(i + (j*3) + "");
					setCellClickHandler($td, i, j);
				}
			}
		}
});
