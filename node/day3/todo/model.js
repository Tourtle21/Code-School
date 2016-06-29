var todos = []

module.exports = {
	createTodo: createTodo,
	deleteTodo: deleteTodoItem,
	getAll: getAllItems,
	getById: getItemById,
	saveTodo: saveTodo
}

function createTodo(title, description, completed)
{
	var now = new Date()

	var id = nextId()
	var createdAt = now.toISOString()
	var updatedAt = now.toISOString()

	var todo = {
		title: title,
		description: description,
		completed: completed,

		id: id,
		createdAt: createdAt,
		updatedAt: updatedAt
	}

	todos.push(todo)

	return todo
}

function deleteTodoItem(todo)
{
	var i, current
	for (i = 0; i < todos.length; i++)
	{
		current = todos[i]
		if (current.id === todo.id)
		{
			todos.splice(i, 1)
			return true
		}
	}

	return false
}

function getAllItems()
{
	return todos
}

function getItemById(id)
{
	var i, todo
	for (i = 0; i < todos.length; i++)
	{
		todo = todos[i]
		if (todo.id === id)
		{
			return todo
		}
	}

	return null
}

function nextId()
{
	return Date.now().toString()
}


function saveTodo(todo)
{
	var i, current
	for (i = 0; i < todos.length; i++)
	{
		current = todos[i]
		if (current.id === todo.id)
		{
			var now = new Date()
			todo.updatedAt = now.toISOString()
			todos[i] = todo
			return true
		}
	}

	return false
}





