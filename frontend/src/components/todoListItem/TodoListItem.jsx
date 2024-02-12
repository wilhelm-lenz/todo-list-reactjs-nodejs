import "./TodoListItem.scss";
import CheckIcon from "../../../public/images/CheckIcon";
import { useContext, useState } from "react";
import TrashIcon from "../../../public/images/TrashIcon";
import { backendUrl } from "../../../api/api";
import { TodoItemContext } from "../../contextes/TodoItemContext";

const TodoListItem = ({ id, title, status, updateTodosArray }) => {
  const { todosData } = useContext(TodoItemContext);
  const [isShowCheck, setIsShowCheck] = useState(false);

  const patchUpdateTodo = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/todos/toggleDone/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: status === "done" ? "open" : "done" }),
      });
      const result = await res.json();

      const { status: responseStatus, data, error } = result;
      if (responseStatus !== "success") throw error;
      else console.log(data.todo);
      const updatedTodos = todosData.map((todo) =>
        todo._id === id ? { ...todo, status: data.todo.status } : todo
      );
      updateTodosArray(updatedTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/v1/todos/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      const { status: responseStatus, data, error } = result;
      if (responseStatus !== "success") throw error;
      else console.log(data.todo);
      const todosWithoutDeleted = todosData.filter((todo) => todo._id !== id);
      updateTodosArray(todosWithoutDeleted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li key={id} className="todo-item">
      <span
        className={`checkbox ${status === "done" ? "check-done" : null}`}
        onClick={() => patchUpdateTodo()}
        onMouseEnter={() => setIsShowCheck(true)}
        onMouseLeave={() => (status !== "done" ? setIsShowCheck(false) : null)}
      >
        {isShowCheck || status === "done" ? <CheckIcon /> : null}
      </span>
      <span className={`todo ${status === "done" ? "done-todo" : null}`}>
        {title}
      </span>
      <span className="delete-todo" onClick={() => deleteTodo()}>
        {status === "done" ? <TrashIcon /> : null}
      </span>
    </li>
  );
};

export default TodoListItem;
