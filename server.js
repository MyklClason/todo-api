var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');


var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextID = 1;


app.use(bodyParser.json());

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

	var matchedTodo = _.findWhere(todos,{id:todoID});

	if (typeof matchedTodo == 'undefined') {
		res.status(404).send();
	} else {
		res.json(matchedTodo);
	}
});

// POST /todos
app.post('/todos', function (req, res) {
	var body = req.body;

	body.id = todoNextID++;
	todos.push(body);

	res.json(body);
});



app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});