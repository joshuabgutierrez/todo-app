const Todo = require('../Models/todo.model');

exports.getTodos = async (req, res, next) => {
	try {
		const todos = await Todo.find();

		return res.status(200).json({
			success: true,
			data: todos
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error
		});
	}
};

exports.addTodo = async (req, res, next) => {
	try {
		const newTodo = await Todo.create(req.body);

		return res.status(201).json({
			success: true,
			data: newTodo
		});
	} catch (error) {
		return res.status(400).json({
			success: false,
			error: error
		});
	}
};

exports.deleteTodo = async (req, res, next) => {
	try {
		const todo = await Todo.findById(req.params.id);

		// Check if transaction exists
		if (!todo) {
			return res.status(404).json({
				success: false,
				error: 'No todo found'
			});
		}

		await todo.remove();

		return res.status(200).json({
			success: true,
			data: {}
		});
	} catch (error) {
		return res.status(200).json({
			success: false,
			error
		});
	}
};
