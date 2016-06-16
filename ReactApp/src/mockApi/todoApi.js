"use strict";

//This file is mocking a web API by hitting hard coded data.
var todos = require('./todoData').todos;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(todo) {
  // todo: get this to generate an id based off of position
  return todo.title.toLowerCase() + '-' + todo.description.toLowerCase();
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var todoApi = {
  getAllTodos: function() {
    return _clone(todos);
  },

  getTodoById: function(id) {
    var todo = _.find(todos, {id: id});
    return _clone(todo);
  },

  saveTodo: function(todo) {
    //pretend an ajax call to web api is made here
    console.log('Saved Todo, mocking an AJAX call...');

    if (todo.id) {
      var existingTodoIndex = _.indexOf(todos, _.find(todos, {id: todo.id}));
      todos.splice(existingAuthorIndex, 1, todo);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new authors in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      todo.id = _generateId(todo);
      todo.push(todo);
    }

    return _clone(todo);
  },

  deleteTodo: function(id) {
    console.log('Deleted Todo, mocking an AJAX call...');
    _.remove(todos, { id: id});
  }
};

module.exports = todoApi;