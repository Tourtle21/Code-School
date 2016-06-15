"use strict";
// Links
var $, jQuery;
$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var hashHistory = require("react-router").hashHistory;
//components
var Router = require("react-router").Router;
var routes = require("./routes");
ReactDOM.render(
	<Router history={hashHistory}>
		{routes}
	</Router>
	, document.getElementById("app"));

// Rule 1: Has to have render method
// Rule 2: can only have one top level tag
// Rule 3: No mutating data directly/So we have to change state
// UI and UX

// Numbers/Letters on the end make it so you can go backwards and forwards