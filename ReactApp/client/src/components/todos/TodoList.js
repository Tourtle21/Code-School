'use strict';

var React = require('react');
var TodoActionCreator = require('../../actions/todoActionCreator');
var todoApi = require('../../mockApi/todoApi');
var Link = require('react-router').Link;


var TodoList = React.createClass({

	deleteTodo: function (todo, event) {
		event.preventDefault();
		TodoActionCreator.deleteTodo(todo);
	},

	updateTodo: function (todo, event) {
		todo.completed ? todo.completed == false : todo.completed = true;
		event.preventDefault();
		TodoActionCreator.updateTodo(todo);
	},

	render: function () {
		var createTodoRow = function (todo) {
			if (todo.completed) {
				var tr = "active"
			} else {
				var tr = ""
			}
			return (
				<tr className{tr} = key={todo._id}>
					<td><Link to={'/manage-todo/' + todo._id}> {todo.title} </Link></td>
					<td>{todo.description}</td>
					<td><a href="#" onClick={this.deleteTodo.bind(this, todo)}>Delete</a></td>
					<td><a href="#" onClick={this.updateTodo.bind(this, todo)}>Completed</a></td>
				</tr>
			);
		};
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Delete</th>
						<th>Check</th>
					</tr>
				</thead>
				<tbody>
					{this.props.todos.map(createTodoRow, this)}
				</tbody>
			</table>
		);
	}
});

module.exports = TodoList;


