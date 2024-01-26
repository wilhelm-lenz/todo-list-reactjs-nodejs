import "./TodoListItem.scss";
import CheckIcon from "../../../public/images/CheckIcon";
import { useEffect, useState } from "react";
import TrashIcon from "../../../public/images/TrashIcon";
import { useLocation } from "react-router-dom";
import { backendUrl } from "../../../api/api";

const TodoListItem = ({ id, todo, done, updateTodosArray }) => {
  const [isShowCheck, setIsShowCheck] = useState(false);

  const postUpdateTodo = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/todos/${id}/toggleDone`, {
        method: "PATCH",
      });
      const data = await res.json();
      const { success, articles, error } = data;
      if (!success) throw error;
      else updateTodosArray(articles);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/todos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      const { success, articles, error } = data;
      if (!success) throw error;
      else updateTodosArray(articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {}, [isShowCheck]);

  return (
    <li key={id} className="todo-item">
      <span
        className={`checkbox ${done ? "check-done" : null}`}
        onClick={() => postUpdateTodo()}
        onMouseEnter={() => setIsShowCheck(true)}
        onMouseLeave={() => (!done ? setIsShowCheck(false) : null)}
      >
        {isShowCheck || done ? <CheckIcon /> : null}
      </span>
      <span className={`todo ${done ? "done-todo" : null}`}>{todo}</span>
      <span className="delete-todo" onClick={() => deleteTodo()}>
        {done ? <TrashIcon /> : null}
      </span>
    </li>
  );
};

export default TodoListItem;
