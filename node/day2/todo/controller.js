module.exports = {
	// CREATE
	create: function (req, res) {
		res.end("I have just posted this on /todos")
	},
	
	// READ
	index: function (req, res) {
		res.end('We are viewing our collection of todos')
	},

	show: function (req, res) {
		res.end('We are viewing our single todo')
	},

	// UPDATE
	update: function (req, res) {
		res.end("I have updated something on my todos page")
	},

	// DELETE
	delete: function (req, res) {
		res.end('I have deleted something on todos page')
	}
}
