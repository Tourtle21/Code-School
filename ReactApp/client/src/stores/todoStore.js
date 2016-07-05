'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require("events");
var CHANGE_EVENT = 'change';

var _todos = [];

var TodoStore = Object.assign({}, EventEmitter.prototype, {
	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function (callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function () {
		this.emit(CHANGE_EVENT)
	},
	getAllTodos: function () {
		return _todos;
	}
})

Dispatcher.register(function (action) {
	switch (action.actionType) {
		case ActionTypes.CREATE_TODO:
			// add the todo
			_todos.push(action.todo);
			TodoStore.emitChange();
			break;
		case ActionTypes.DELETE_TODO:
			_todos.pop(action.todo);
			TodoStore.emitChange();
			break;
		// case ActionTypes.UPDATE_TODO:

		// break;
		default: 
			// do nothing
	}
});

module.exports = TodoStore;
// EventEmitter is an object and you are getting the key prototype 
// and adding the object inside that to our object so we can use the functions in it


// slade is overappedaged because he has multiple somethings sticking out