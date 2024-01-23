import { useContext, useEffect } from "react";
import { TodoItemContext } from "../contextes/TodoItemContext";

const FetchTodos = () => {
  const { setTodosData } = useContext(TodoItemContext);

  useEffect(() => {
    fetch("http://localhost:3064/api/todos", { method: "GET" })
      .then((res) => res.json())
      .then(({ success, articles, error }) => {
        if (!success) throw error;
        else setTodosData(articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return <></>;
};

export default FetchTodos;
