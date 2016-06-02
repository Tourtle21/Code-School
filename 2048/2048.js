$(document).ready(function() {
	var size = 4;
	var board = {};
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
	createBoard();
	addRandomTile();
	addRandomTile();
	refreshBoard();
});
