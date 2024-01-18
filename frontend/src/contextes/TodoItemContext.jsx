import { createContext, useState } from "react";

const TodoItemContext = createContext("");

const TodoItemContextProvider = ({ children }) => {
  const [todos, setTodos] = useState("");
  const [todosData, setTodosData] = useState([]);
  return (
    <TodoItemContext.Provider
      value={{ todos, setTodos, todosData, setTodosData }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export { TodoItemContext, TodoItemContextProvider };
