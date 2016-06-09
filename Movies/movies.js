var movies = [];
var addMovie = function () {
	var $name = $("#input-name");
	var $genre = $("#input-genre");
	var $description = $("#input-description");
	var name = $name.val();
	var genre = $genre.val();
	var description = $description.val();
	$name.val("");
	$genre.val("");
	$description.val("");
	var movie = {name: name, genre: genre, description: description}
	movies.push(movie)
	saveData();
	refreshList();
};
var refreshList = function() { 
	var $list = $("#list");
	$list.empty();
	$.each(movies, function (i, movie) {
		var $li = $("<li></li>");
		$title = $("<div></div>").addClass("title")
		$title.text(movie.name)
		$li.append($title).appendTo($list);
		$title.click(function () {
		$title.text($title.text() + movie.description);
		})
	});
}
var saveData = function() {
	localStorage.setItem("movies", JSON.stringify(movies));
	
};
var loadSavedData = function() {
	var savedMovies = localStorage.getItem("movies");
	if(savedMovies) {
		movies = JSON.parse(savedMovies);
	}
}
$(document).ready(function() {

	$("#form").submit(function (event) {
		event.preventDefault();
		addMovie();

	});
	loadSavedData();
	refreshList();
});

