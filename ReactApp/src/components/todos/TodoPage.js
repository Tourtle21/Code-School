"use strict";

var React = require("react");
var todoApi = require("../../mockApi/todoApi");
var TodoList = require("./TodoList");
var Link = require("react-router").Link;


var Todos = React.createClass({
	getInitialState: function() {
		return {
			todos: []
		}
	},

	componentWillMount: function() {
		this.setState({
			todos: todoApi.getAllTodos()
		})
	},

	render: function() {
		return (
			<div>
				<h2>Things we need todo</h2>
				<Link className="btn btn-success btn-sm" to="/manage-todo">Add todo</Link>
				<TodoList
					todos={this.state.todos}
				 />
			</div>
		);
	}
});

module.exports = Todos;