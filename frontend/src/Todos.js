import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Delete } from '@styled-icons/material';
import { CheckShield } from '@styled-icons/boxicons-solid';
import { TodosContext } from './Context/TodosContext';
import { ACTIONS } from './Reducers/TodosReducer';
import axios from 'axios';

const TodoContainer = styled.div`
	max-width: 300px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px auto;
	border: 1px solid blue;
	padding: 0 5px;
`;

const StyledDeleteButton = styled(Delete)`
  color: red;
  cursor: pointer;
`;

const StyledCheckShield = styled(CheckShield)`
	color: teal;
	cursor: pointer;
`;

function Todos() {
	const { todos, dispatch, deleteTodo, markComplete } = useContext(TodosContext);

	useEffect(
		() => {
			async function getTodos() {
				try {
					const response = await axios.get('http://localhost:5000/');

					dispatch({
						type: ACTIONS.GET_TODOS,
						payload: response.data.data
					});
				} catch (error) {
					console.log(error);
				}
			}
			getTodos();
		},
		[ dispatch ]
	);

	const todoList = todos.todos.length ? (
		todos.todos.map((todo) => (
			<TodoContainer key={todo._id}>
				<p>{todo.name}</p>
				<div>
					<StyledCheckShield size="35" onClick={() => markComplete(todo._id)} />
					<StyledDeleteButton size="35" onClick={() => deleteTodo(todo._id)}>
						Delete
					</StyledDeleteButton>
				</div>
			</TodoContainer>
		))
	) : (
		<p>Congrats! You had a productive day!</p>
	);

	const currentTodos = todos.loading ? 'Loading todos...' : todoList;

	return <div>{currentTodos}</div>;
}

export default Todos;
