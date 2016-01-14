var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meeting',
	completed: false
}, {
	id: 2,
	description: 'Supply Run',
	completed: false
}, {
	id: 3,
	description: 'Start Node JS course',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoID = parseInt(req.params.id, 10);

	var matchedTodo;
	todos.forEach(function (todo) {
		if (todo.id === todoID) {
			matchedTodo = todo;
		}
	});

	if (typeof matchedTodo == 'undefined') {
		res.status(404).send();
	} else {
		res.json(matchedTodo);
	}
});



app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});