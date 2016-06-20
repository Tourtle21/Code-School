"use strict";

var React = require("react");
var TodoForm = require("./TodoForm");
var todoApi = require("../../mockApi/todoApi");
var toastr = require("toastr");
var hashHistory = require("react-router").hashHistory;

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
		var newTodo = Object.assign({}, this.state.todo);
		
		newTodo[field] = value;

		this.setState({
			todo: newTodo
		});

		
	},

	saveTodo: function (event) {
		console.log(this.state.todo.title)
		if (this.state.todo.title != "") {
			event.preventDefault();
			todoApi.saveTodo(this.state.todo);
			toastr.success("Todo saved!");
			hashHistory.push('/todos')
		}
		else {
			toastr.warning("You at least have to enter a title")
		}
	},

	render: function() {
		return (
			<div>
				<h2>Manage Todo</h2>
				<TodoForm 
					todo={this.state.todo}
					saveTodoState={this.saveTodoState}
					saveTodo={this.saveTodo}
				/>
			</div>
		);
	}
});

module.exports = ManageTodoPage;