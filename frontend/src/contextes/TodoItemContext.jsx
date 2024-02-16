import { createContext, useState } from "react";

const TodoItemContext = createContext("");

const TodoItemContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [todosData, setTodosData] = useState([]);
  const [authorization, setAuthorization] = useState(null);
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  return (
    <TodoItemContext.Provider
      value={{
        title,
        setTitle,
        todosData,
        setTodosData,
        authorization,
        setAuthorization,
        userProfileInfo,
        setUserProfileInfo,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export { TodoItemContext, TodoItemContextProvider };
