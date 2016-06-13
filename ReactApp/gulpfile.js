"use strict";

var gulp = require("gulp");
var connect = require("gulp-connect"); // Run our local server (dev)
var open = require("gulp-open"); // Open our default browser
var browserify = require("browserify"); // Bundle JS and lets us use the Common js pattern in the frontend
var reactify = require("reactify"); // Transpile our JSX to JS
var source = require("vinyl-source-stream"); // Use conventional text stream with gulp
var concat = require("gulp-concat"); // concatenate our file

var config = {
	port: 8999,
	devBaseUrl: "http://localhost",
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		mainJs: './src/main.js',
		images: './src/images/*',
		css: [
			"node_modules/bootstrap/dist/css/bootstrap.min.css",
			"node_modules/bootstrap/dist/css/bootstrap.theme.min.css",
		],
		dist: './dist',
	}
}
// Setup for our dev server
gulp.task("connect", function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload: true
	});
});

// Depends on connect task, and will auto run default browser
gulp.task('open', ['connect'], function() {
	gulp.src("dist/index.html")
		.pipe(open({uri: config.devBaseUrl + ":" + config.port + "/"}));

});
// Take html files from src dir and put them in dist dir, and refresh
gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});
// Take css files from src dir and put them in dist/css dir, and refresh
gulp.task("css", function() {
	gulp.src(config.paths.css)
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest(config.paths.dist + "/css"));
		.pipe(connect.reload());
});

gulp.task("images", function() {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + "/images"))
		.pipe(connect.reload());
});

gulp.task("js", function() {
	browserify.src(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on("error", console.error.bind(console))
		.pipe(source("bundle.js"))
		.pipe(gulp.dest(config.paths.dist + "/script"))
		.pipe(connect.reload());
});

gulp.task("watch", function() {
	gulp.watch(config.paths.html, ["html"]);
	gulp.watch(config.paths.js, ["js"]);
});

// Runs all tasks
gulp.task("default", ['html', 'css', 'js', 'images', 'open', 'watch'])

