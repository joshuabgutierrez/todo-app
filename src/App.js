import React, { Component } from "react";
import "./styles.css";
import Todos from "./Todos";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-family: "Poppins";
`;

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        content: "Work on portfolio"
      },
      {
        id: uuidv4(),
        content: "Meeting with client"
      },
      {
        id: uuidv4(),
        content: "Apply fertilizer to lawn"
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  };

  addTodo = newTodo => {
    newTodo.id = uuidv4();
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <TodoContainer>
        <h1>My Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </TodoContainer>
    );
  }
}

export default App;
