"use strict";
var $, jQuery;
$ = jQuery = require("jquery");
var React = require("react");
var ReactDOM = require("react-dom");
var HomePage = require("./components/HomePage");

var App = React.createClass({
	getInitialState: function() {
		return {
			name: "Kaden"

		}
	},
	render: function () {
		return (
			<div>
				<h1>This is App component</h1>
				<HomePage 
					name={this.state.name}
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById("app"));

// Rule 1: Has to have render method
// Rule 2: can only have one top level tag
// Rule 3: No mutating data directly/So we have to change state
// UI and UX