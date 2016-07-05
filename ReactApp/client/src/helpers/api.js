'use strict';

var ajax = require('./ajax.js');

module.exports = {
	getAllTodos: getAllTodos,
	createTodo: createTodo,
}

function createTodo(todo) {
	var url = "/todos";
	var data = todo;

	return ajax(url, data);
}

function getAllTodos() {
	var url = "/todos";
	var data = {};
	var type = "GET";
	return ajax(url, data, type);
}