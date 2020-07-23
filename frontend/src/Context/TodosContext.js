import React from 'react';
import { createContext, useReducer } from 'react';
import TodosReducer, { ACTIONS } from '../Reducers/TodosReducer';
import axios from 'axios';

// Optional: it could be empty but I am adding
// todos to have some data to play with
const initialTodos = {
	todos: [],
	loading: true
};

// Create context
export const TodosContext = createContext(initialTodos);

// Context Provider
export const TodosContextProvider = ({ children }) => {
	// useReducer Hook destructuring
	const [ todos, dispatch ] = useReducer(TodosReducer, initialTodos);

	// ADD NEW TODO TO DATABASE
	async function addTodo(newTodo) {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const response = await axios.post('http://localhost:5000/', newTodo, config);
			console.log(response.data);

			dispatch({
				type: ACTIONS.ADD_TODO,
				payload: response.data.data
			});
		} catch (error) {
			console.log(error);
		}
	}

	// DELETE TODO FROM DATABASE
	async function deleteTodo(id) {
		try {
			await axios.delete(`http://localhost:5000/${id}`);

			dispatch({
				type: ACTIONS.DELETE_TODO,
				payload: id
			});
		} catch (error) {
			console.log(error);
		}
	}

	// MARK COMPLETE TODO - STILL WORKING ON IT
	async function markComplete(id) {
		console.log(id);
	}

	return (
		<TodosContext.Provider value={{ dispatch, todos, addTodo, deleteTodo, markComplete }}>
			{children}
		</TodosContext.Provider>
	);
};
