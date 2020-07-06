import { v4 as uuidv4 } from "uuid";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DELETE_TODO: "delete-todo"
};

export default function TodosReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        {
          id: uuidv4(),
          content: action.payload
        }
      ];
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload);

    default:
      return todos;
  }
}
