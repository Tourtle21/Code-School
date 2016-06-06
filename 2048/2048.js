$(document).ready(function() {
	var size = 4;
	var board = {};
	board = {"2-1": 2048, "3-1": 1024, "1-3": 512, "2-3": 256, "0-2": 128, "1-2": 64, "1-1": 32, "0-0": 16, "0-1": 8, "1-0": 4}
	var tileKey = function(col, row) {
		return "" + col + "-" + row;
	};

	var createBoard = function () {
		var $board = $("#board")
		for (var i = 0; i < size; i++) {
			var $row = $("<div></div>").addClass("row");
			$board.append($row)
			for (var j = 0; j < size; j++) {
				var $tile = $("<div></div>").addClass("tile");
				$tile.attr("id", tileKey(j, i));
				$row.append($tile)
			}
		}
	};
	var getEmptyTiles = function () {
		var empty = [];
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				var key = tileKey(j, i);
				var num = board[key];
				if (num === undefined) {
					empty.push(key);
				}
			};
		};
		return empty;
	};
	var refreshBoard = function () {
		for (var i = 0; i < size; i++) {
			for (var j = 0; j < size; j++) {
				var key = tileKey(j, i);
				var num = board[key];
				var $tile = $("#" + key);
				$tile.text(num).addClass("tile-" + num)
			};
		};
	};
	var addRandomTile = function () {
		var key = getEmptyTiles()[Math.floor(Math.random() * getEmptyTiles().length)]
		var number;
		if (Math.random() > 0.9) {
			number = 4;
		}
		else {
			number = 2;
		}
		board[key] = number;
	}
	var newGame = function() {
		board = {};
		addRandomTile();
		addRandomTile();
		refreshBoard();
	}
	createBoard();
	addRandomTile();
	addRandomTile();
	refreshBoard();
});
