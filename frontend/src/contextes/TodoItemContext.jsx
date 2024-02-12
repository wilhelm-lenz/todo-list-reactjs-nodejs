import { createContext, useState } from "react";

const TodoItemContext = createContext("");

const TodoItemContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [todosData, setTodosData] = useState([]);
  return (
    <TodoItemContext.Provider
      value={{ title, setTitle, todosData, setTodosData }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export { TodoItemContext, TodoItemContextProvider };
