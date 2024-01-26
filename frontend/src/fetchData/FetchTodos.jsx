import { useContext, useEffect } from "react";
import { TodoItemContext } from "../contextes/TodoItemContext";
import { backendUrl } from "../../api/api";

const FetchTodos = () => {
  const { setTodosData } = useContext(TodoItemContext);

  const getAllTodos = async () => {
    try {
      const res = await fetch(backendUrl + "/api/todos", {
        method: "GET",
      });
      const data = await res.json();
      const { success, articles, error } = data;
      if (!success) throw error;
      else setTodosData(articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return <></>;
};

export default FetchTodos;
