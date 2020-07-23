export const ACTIONS = {
	GET_TODOS: 'get-todos',
	ADD_TODO: 'add-todo',
	DELETE_TODO: 'delete-todo'
};

export default function TodosReducer(todos, action) {
	switch (action.type) {
		case ACTIONS.GET_TODOS:
			return {
				...todos,
				loading: false,
				todos: action.payload
			};
		case ACTIONS.ADD_TODO:
			return {
				todos: [ ...todos.todos, action.payload ]
			};
		case ACTIONS.DELETE_TODO:
			return {
				...todos,
				todos: todos.todos.filter((todo) => todo._id !== action.payload)
			};

		default:
			return todos;
	}
}
