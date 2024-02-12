import { useContext, useEffect } from "react";
import { TodoItemContext } from "../contextes/TodoItemContext";
import { backendUrl } from "../../api/api";

const FetchTodos = () => {
  const { setTodosData } = useContext(TodoItemContext);
  const getAllTodos = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/todos", {
        method: "GET",
      });
      const result = await res.json();

      const { status, data, error } = result;
      if (!status) throw error;
      else setTodosData(data.todos);
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
