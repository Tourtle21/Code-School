"use strict";

var React = require("react");
var todoApi = require("../../mockApi/todoApi");
var toastr = require("toastr")
var hashHistory = require("react-router").hashHistory;

var TodoList = React.createClass({
	deleteTodo: function (todoId, event) {
		event.preventDefault();
		todoApi.deleteTodo(todoId);
		toastr.success("Todo deleted!"); 
		// slade the sliper wants to use it for his own diabolicol ways
		// rekt.slade("sliper")
	},
	log: function () {
		console.log(this.props.todos)
	},
	render: function() {
		var checkForTodos = function () {
			if (this.props.todos.length > 0) {
				return this.props.todos.map(createTodoRow, this);
			}  else {
				return (
					<tr><td>No Todos</td></tr>
				)
			}
		}.bind(this);

		var createTodoRow = function (todo) {
			return (
				<tr key={todo.id}>
					<td>{todo.title}</td>
					<td>{todo.description}</td>
					<td><a onClick={this.deleteTodo.bind(this, todo.id)} href="#">Delete</a></td>
				</tr>
			);
		};
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{checkForTodos()}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;