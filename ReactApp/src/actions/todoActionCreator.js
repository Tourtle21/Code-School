"use strict";

var Dispatcher = require("../dispatcher/Dispatcher");
var ActionTypes = require("../constants/actionTypes");
var todoApi = require("../mockApi/todoApi")

var TodoActionCreater = {
	createTodo: function (todo) {
		var newTodo = todoApi.saveTodo(todo);
		//ajax call
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_TODO,
			todo: newTodo
		});
	},
	deleteTodo: function (todo) {
		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_TODO,
			todo: todo
		});
	}
};

module.exports = TodoActionCreater;