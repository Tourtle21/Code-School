"use strict";

var React = require("react");


var TodoList = React.createClass({

	render: function() {
		var createTodoRow = function (todo) {
			return (
				<tr key={todo.id}>
					<td>{todo.id}</td>
					<td>{todo.title}</td>
					<td>{todo.description}</td>
				</tr>
			);
		};
		return (
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Description</th>
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