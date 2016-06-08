
	var size = 4;
	var board = {};
	// board = {"2-1": 2048, "3-1": 1024, "1-3": 512, "2-3": 256, "0-2": 128, "1-2": 64, "1-1": 32, "0-0": 16, "0-1": 8, "1-0": 4}
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
				$tile.text("").removeClass();
				$tile.addClass("tile");
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
	$(document).keydown(function(e) {
		switch(e.which) {
			case 65:
			case 37: //left
			keyPressed("left")
			break;
			case 83:
			case 40: //down
			keyPressed("down")
			break;
			case 68:
			case 39: //right
			keyPressed("right")
			break;
			case 87:
			case 38: //up
			keyPressed("up")
			break;
		}
	});
	var getNumbersInRow = function(row) {
		var numbers = [];
		for (var col = 0; col < size; col++) {
			var key = tileKey(col, row);
			var val = board[key];
			if (val) {
				numbers.push(val);
			} 
		}
		return numbers;
	}
	var getNumbersInCol = function(col) {
		var numbers = [];
		for (var row = 0; row < size; row++) {
			var key = tileKey(col, row);
			var val = board[key];
			if (val) {
				numbers.push(val);
			} 
		}
		return numbers;
	}
	function collapse(numbers) {
		var array = [];
		while (numbers.length > 0) {
			if (numbers[0] === numbers[1]) {
				array.push(numbers[0] * 2);
				numbers.shift();
				numbers.shift();
			} else {
				array.push(numbers[0])
				numbers.shift();
			}
		}
		while (array.length < size) {
			array.push(undefined);
		}
		return array
	}
	var keyPressed = function(direction) {
		var copy = $.extend({}, board);
		console.log(copy , board)
		if (direction == "left") {
			for (var n = 0; n < size; n++) {
				combineLeft(n);
			}
		}
		if (direction == "up") {
			for (var n = 0; n < size; n++) {
				combineUp(n);
			}
		}
		if (direction == "right") {
			for (var n = 0; n < size; n++) {
				combineRight(n);
			}
		}
		if (direction == "down") {
			for (var n = 0; n < size; n++) {
				combineDown(n);
			}
		}
		refreshBoard();
		addRandomTile();
	}
	var setNumbersInRow = function(row, newNumbers) {
		for (var col = 0; col  < size; col++) {
			var key = tileKey(col, row);
			board[key] = newNumbers[col]
		}
	}
	var setNumbersInCol = function(col, newNumbers) {
		for (var row = 0; row  < size; row++) {
			var key = tileKey(col, row);
			board[key] = newNumbers[row]
		}
	}
	function combineLeft(row) {
		var numbers = collapse(getNumbersInRow(row))
		setNumbersInRow(row, numbers);
	}
	function combineUp(col) {
		var numbers = collapse(getNumbersInCol(col))
		setNumbersInCol(col, numbers);
	}
	function combineRight(row) {
		var oldNumbers = getNumbersInRow(row).reverse();
		var numbers = collapse(oldNumbers).reverse();
		setNumbersInRow(row, numbers);
	}
	function combineDown(col) {
		var oldNumbers = getNumbersInCol(col).reverse()
		var numbers = collapse(oldNumbers).reverse();
		setNumbersInCol(col, numbers);
	}
	
	createBoard();
	addRandomTile();
	addRandomTile();
	refreshBoard();
	console.log(collapse(getNumbersInRow(0)))

