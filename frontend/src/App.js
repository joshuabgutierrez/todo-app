import React from "react";
import Todos from "./Todos";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import { TodosContextProvider } from "./Context/TodosContext";

const TodoContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: "Poppins";
`;

function App() {
  return (
    <TodosContextProvider>
      <TodoContainer>
        <h1>My Todos</h1>
        <Todos />
        <AddTodo />
      </TodoContainer>
    </TodosContextProvider>
  );
}

export default App;
