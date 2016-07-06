'use strict';

var Dispatcher = require('../dispatcher/Dispatcher')
var todoApi = require('../mockApi/todoApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActionCreator = {
	initializeApp: function () {
		Dispatcher.dispatch({
			actionType: ActionTypes.INITIALIZE,
			initialData: {
				todos: todoApi.getAllTodos()
			}
		})
	}
}

module.exports = InitializeActionCreator;