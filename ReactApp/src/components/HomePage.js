"use strict";

var React = require("react");

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Code School React App</h1>
				<h2>{this.props.name}</h2>
				<p>Lets do stuff</p>
			</div>
		);
	}
});
module.exports = Home;