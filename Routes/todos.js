// todos router

const router = require('express').Router();
const Todo = require('../Models/todo.model');
const { getTodos, addTodo, deleteTodo } = require('../Controllers/todos.controller');

// Another way to set up router
// router.get('/', (req, res) => {})

// Using promises
// router.route('/').get((req, res) => {
// 	Todo.find().then((todos) => res.json(todos)).catch((err) => res.status(400).json(err));
// });

// Using async/await
router.route('/').get(getTodos).post(addTodo);

router.route('/:id').delete(deleteTodo);

module.exports = router;
