"use strict";
var React = require("react");
var TextInput = require("../common/TextInput");

var TodoForm = React.createClass({
	render: function() {
		return (
			<form onSubmit={this.props.saveTodo}>
				<h3>Todo Form</h3>
				<TextInput
					name="title"
					placeholder="Title"
					value={this.props.todo.title}
					saveTodoState={this.props.saveTodoState}
				 />
				<TextInput 
					name="description"
					placeholder="Description"
					value={this.props.todo.description}
					saveTodoState={this.props.saveTodoState}
				/>
				<input type="submit" value="Save Todo" className="btn btn-success" />
			</form>
		);
	}
});

module.exports = TodoForm;