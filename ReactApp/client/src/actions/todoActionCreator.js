"use strict";

var Dispatcher = require("../dispatcher/Dispatcher");
var ActionTypes = require("../constants/actionTypes");
var API = require('../helpers/api')

var TodoActionCreater = {
	createTodo: function (todo) {
		var newTodoPromise = API.createTodo(todo);
		
		newTodoPromise
			.then(function (newTodo) {
				Dispatcher.dispatch({
					actionType: ActionTypes.CREATE_TODO,
					todo: newTodo
				});
			})
			.fail(function (xhr, status, err) {
				console.log('Create Todo Failed!')
			});


	}
};

module.exports = TodoActionCreater;