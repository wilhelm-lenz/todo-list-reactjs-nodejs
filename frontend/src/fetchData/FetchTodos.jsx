import { useContext, useEffect } from "react";
import { TodoItemContext } from "../contextes/TodoItemContext";

const FetchTodos = () => {
  const { todosData, setTodosData } = useContext(TodoItemContext);

  useEffect(() => {
    fetch("http://localhost:3064/api/todos", { method: "GET" })
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) throw error;
        else setTodosData(result);
      });
  }, []);

  console.log(todosData);

  return <></>;
};

export default FetchTodos;
