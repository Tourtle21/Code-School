var Todo = require('./model')

module.exports = {
	// CREATE
	create: function (req, res)
	{
		var title = req.body.title
		var description = req.body.description
		var completed = req.body.completed

		var item = Todo.createTodo(title, description, completed)
		res.status(201).json(item)
	},

	// READ
	index: function (req, res)
	{
		var collection = Todo.getAll()
		res.json(collection)
	},

	show: function (req, res)
	{
		var id = req.params.id
		var item = Todo.getById(id)

		if (item === null)
		{
			res.status(404).json({
				error: 'Could not find item with that id'
			})
		}
		else
		{
			res.json(item)
		}
	},

	// UPDATE
	update: function (req, res)
	{
		var id = req.params.id
		var item = Todo.getById(id)

		if (item === null)
		{
			res.status(404).json({
				error: 'Could not find item with that id'
			})
		}
		else
		{
			item.title = req.body.title
			item.description = req.body.description
			item.completed = req.body.completed

			if (Todo.saveTodo(item))
			{
				res.json(item)
			}
			else
			{
				res.status(404).json({
					error: 'Could not find item with that id'
				})
			}
		}
	},

	// DELETE
	delete: function (req, res)
	{
		var id = req.params.id
		var item = Todo.getById(id)

		if (item === null)
		{
			res.status(404).json({
				error: 'Could not find item with that id'
			})
		}
		else
		{
			if (Todo.deleteTodo(item))
			{
				res.status(204).end()
			}
			else
			{
				res.status(404).json({
					error: 'Could not find item with that id'
				})
			}
		}
	}
}