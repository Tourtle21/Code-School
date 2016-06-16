"use strict";

var React = require("react");
var TextInput = require("../common/TextInput")

var ManageTodoPage = React.createClass({
	getInitialState: function() {
		return {
			todo: {
				id: '',
				title: '',
				description: ''
			}
		}
	},

	saveTodoState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
	},

	render: function() {
		return (
			<div>
				<h2>Manage Todo</h2>
				<form>
					<h3>Todo Form</h3>
					<TextInput
						name="Title:"
						placeholder="Title"
						value=''
						onChange={this.saveTodoState}
					 />
					<TextInput 
						name="Description:"
						placeholder="Description"
						value=""
						onChange={this.saveTodoState}
					/>
				</form>
			</div>
		);
	}
});

module.exports = ManageTodoPage;