import React from "react";
import { v4 as uuidv4 } from "uuid";
import { createContext, useReducer } from "react";
import TodosReducer from "../Reducers/TodosReducer";

// Optional: it could be empty but I am adding
// todos to have some data to play with
const initialTodos = [
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
];

// Create context
export const TodosContext = createContext(initialTodos);

// Context Provider
export const TodosContextProvider = ({ children }) => {
  // useReducer Hook destructuring
  const [todos, dispatch] = useReducer(TodosReducer, initialTodos);
  return (
    <TodosContext.Provider value={{ dispatch, todos }}>
      {children}
    </TodosContext.Provider>
  );
};
