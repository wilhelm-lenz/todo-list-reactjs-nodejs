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
      .then(({ success, articles, error }) => {
        if (!success) throw error;
        else updateTodosArray(articles);
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = () => {
    fetch(`http://localhost:3064/api/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ success, articles, error }) => {
        if (!success) throw error;
        else updateTodosArray(articles);
      })
      .catch((err) => console.log(err));
  };

  return (
    <li key={id} className="todo-item">
      <span
        className={`checkbox ${done ? "check-done" : null}`}
        onClick={() => updateTodo()}
        onMouseEnter={() => setIsShowCheck(true)}
        onMouseLeave={() => (!done ? setIsShowCheck(false) : null)}
      >
        {isShowCheck || done ? <CheckIcon /> : null}
      </span>
      <span className={`todo ${done ? "done-todo" : null}`}>{todo}</span>
      <span className="delete-todo" onClick={() => deleteTodo()}>
        <TrashIcon />
      </span>
    </li>
  );
};

export default TodoListItem;
