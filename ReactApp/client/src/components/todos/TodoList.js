'use strict';

var React = require('react');
var todoApi = require('../../mockApi/todoApi');
var toastr = require('toastr');


var TodoList = React.createClass({

	deleteTodo: function (todoId, event) {
		event.preventDefault();
		todoApi.deleteTodo(todoId);
		toastr.success('Todo deleted!');
	},

	render: function () {

		var createTodoRow = function (todo) {
			return (
				<tr key={todo._id}>
					<td>{todo.title}</td>
					<td>{todo.description}</td>
					<td><a href="#" onClick={this.deleteTodo.bind(this, todo._id)}>Delete</a></td>
				</tr>
			);
		};
		return (
			<table className="table">
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th></th>
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


