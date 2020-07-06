import React, { useContext } from "react";
import styled from "styled-components";
import { Delete } from "@styled-icons/material";
import { TodosContext } from "./Context/TodosContext";
import { ACTIONS } from "./Reducers/TodosReducer";

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
  &:hover {
    cursor: pointer;
  }
`;

function Todos() {
  const { todos, dispatch } = useContext(TodosContext);
  const todoList = todos.length ? (
    todos.map(todo => (
      <TodoContainer key={todo.id}>
        <p>{todo.content}</p>
        <StyledDeleteButton
          size="35"
          onClick={() =>
            dispatch({
              type: ACTIONS.DELETE_TODO,
              payload: todo.id
            })
          }
        >
          Delete
        </StyledDeleteButton>
      </TodoContainer>
    ))
  ) : (
    <p>Congrats! You had a productive day!</p>
  );
  return <div>{todoList}</div>;
}

export default Todos;
