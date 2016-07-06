'use strict';

var React = require('react');
var TodoForm = require('./TodoForm');
var TodoActionCreator = require('../../actions/todoActionCreator');
var todoApi = require('../../mockApi/todoApi');
var toastr = require('toastr');
var browserHistory = require('react-router').browserHistory;

var ManageTodoPage = React.createClass({

	getInitialState: function () {
		return {
			errors: {},
			todo: {
				id: '',
				title: '',
				description: ''
			}
		}
	},

	saveTodoState: function (event) {
		var field = event.target.name;
		var value = event.target.value;
		var newTodo = Object.assign({}, this.state.todo);

		// sort of like todo.title or todo.description
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

		TodoActionCreator.createTodo(this.state.todo);
		// todoApi.saveTodo(this.state.todo);
		
		toastr.success('Todo saved!');
		browserHistory.push('/todos-page');

	},

	todoFormIsValid: function () {
		var formIsValid = true;
		var newErrors = {};

		if (this.state.todo.title.length < 3) {
			newErrors.title = 'Title cannot be less than 3 characters...silly goose';
			formIsValid = false;
		}

		if (this.state.todo.description.length < 3) {
			newErrors.description = 'Description cannot be less than 3 characters...crazy pants';
			formIsValid = false;
		}

		this.setState({
			errors: newErrors
		});

		return formIsValid;

	},

	render: function () {
		console.log(this.state.todo);
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







