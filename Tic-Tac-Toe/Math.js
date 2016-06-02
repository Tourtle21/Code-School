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
		console.log(available)
		if (available == []) {
			var $button = $("<button></button>");
			$("body").append($button)
			$button.text("Play Again");
			$button.click(reload);				
			buttons = false;
		}
		else {
			row = Math.floor(Math.random() * 2);
			col = Math.floor(Math.random() * 2);
			number = available[Math.floor(Math.random() * available.length)]
			if ($("." + number).text() == "") {
				var $span = $("<span></span>").text("O");
				$span.hide().appendTo($("." + number)).fadeIn();
				$("." + number).css("background-color", "orange");
			}
		}

	}
	var checkWinningSet= function(player, i1, j1, i2, j2, i3, j3) {
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
					console.log(available)
					var $span = $("<span></span>").text("X");
					$span.hide().appendTo($(this)).fadeIn();
					$(this).css("background-color", "orange");

					checkWinner();
					player = 2;
				}
				if (computerOn) {
					computer()
					player = 1;
				}
				if (turns == 9 && !gameOver) {
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
			console.log("worked")
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
