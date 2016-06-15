"use strict";

var React = require("react");
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var AboutPage = require("./components/about/About");
var HomePage = require("./components/HomePage");
var App = require("./components/App");
var TodoPage = require("./components/todos/TodoPage");

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/todos" component={TodoPage} />
	</Route>

); 
module.exports = routes;

// I beleive IndexRoute is like a default component