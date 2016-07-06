'use strict';

var ajax = require('./ajax');

module.exports = {
	getAllTodos: getAllTodos,
	createTodo: createTodo
}

function getAllTodos () {
	var url = '/todos';
	var data = {};
	var type = 'GET';

	return ajax(url, data, type);
}

function createTodo (todo) {
	var url = '/todos';
	var data = todo;

	return ajax(url, data);
}