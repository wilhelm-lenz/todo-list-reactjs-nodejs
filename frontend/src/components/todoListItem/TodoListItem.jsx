import "./TodoListItem.scss";
import CheckIcon from "../../../public/images/CheckIcon";
import { useState } from "react";
import TrashIcon from "../../../public/images/TrashIcon";
import { useLocation } from "react-router-dom";

const TodoListItem = ({ id, todo, done, updateTodosArray }) => {
  const [isShowCheck, setIsShowCheck] = useState(false);

  const updateTodo = () => {
    fetch(`http://localhost:3064/api/todos/${id}/toggleDone`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) throw error;
        else updateTodosArray(result);
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = () => {
    fetch(`http://localhost:3064/api/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) throw error;
        else updateTodosArray(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <li className="todo-item">
      <span
        className={`checkbox ${done ? "check-done" : null}`}
        onClick={() => updateTodo(id)}
        onMouseEnter={() => setIsShowCheck(true)}
        onMouseLeave={() => (!done ? setIsShowCheck(false) : null)}
      >
        {isShowCheck || done ? <CheckIcon /> : null}
      </span>
      <span className={`todo ${done ? "done-todo" : null}`}>{todo}</span>
      <span className="delete-todo" onClick={() => deleteTodo(id)}>
        <TrashIcon />
      </span>
    </li>
  );
};

export default TodoListItem;
