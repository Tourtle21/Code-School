"use strict";

var React = require("react");
var TodoForm = require("./TodoForm");
var todoApi = require("../../mockApi/todoApi");
var toastr = require("toastr");
var hashHistory = require("react-router").hashHistory;

var ManageTodoPage = React.createClass({
	getInitialState: function() {
		return {
			errors: {

			},
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
		var newTodo = Object.assign({}, this.state.todo);
		
		newTodo[field] = value;

		this.setState({
			todo: newTodo
		});

		
	},

	saveTodo: function (event) {
		event.preventDefault();
		if (!this.todoFormIsValid()) {
			return;
		}
		console.log(this.state.todo)
		todoApi.saveTodo(this.state.todo);
		toastr.success("Todo saved!");
		hashHistory.push('/todos')
	},

	todoFormIsValid: function () {
		var formIsValid = true;
		var newErrors = {};

		if (this.state.todo.title.length < 3) {
			newErrors.title = "Title cannot be less than 3 characters...duh";
			formIsValid = false;
		};
		if (this.state.todo.description.length < 10) {
			newErrors.description = "Description cannot be less than 10 characters...duh";
			formIsValid = false;
		};
		this.setState({
			errors: newErrors
		});
		return formIsValid;
	},

	render: function() {
		return (
			<div>
				<h2>Manage Todo</h2>
				<TodoForm 
					todo={this.state.todo}
					saveTodoState={this.saveTodoState}
					saveTodo={this.saveTodo}
					errors={this.state.errors}
				/>
			</div>
		);
	}
});

module.exports = ManageTodoPage;