"use strict";
// Links
var $, jQuery;
$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var browserHistory = require("react-router").browserHistory;
//components
var Router = require("react-router").Router;
var routes = require("./routes");
ReactDOM.render(
	<Router history={browserHistory}>
		{routes}
	</Router>
	, document.getElementById("app"));
// slade is the best person on earth and when the other people decide they want to kill him they have the right to try but slade is to buff for them so they probably would get ra*ekt

// Rule 1: Has to have render method
// Rule 2: can only have one top level tag
// Rule 3: No mutating data directly/So we have to change state
// UI and UX

// Numbers/Letters on the end make it so you can go backwards and forwards