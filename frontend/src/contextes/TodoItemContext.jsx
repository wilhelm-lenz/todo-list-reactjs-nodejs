import { createContext, useState } from "react";

const TodoItemContext = createContext("");

const TodoItemContextProvider = ({ children }) => {
  const [task, setTask] = useState("");
  const [todosData, setTodosData] = useState([]);
  return (
    <TodoItemContext.Provider
      value={{ task, setTask, todosData, setTodosData }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export { TodoItemContext, TodoItemContextProvider };
