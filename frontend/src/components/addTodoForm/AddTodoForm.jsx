/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./AddTodoForm.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";
import { backendUrl } from "../../../api/api";

const AddTodoForm = ({ updateTodosArray }) => {
  const { task, setTask } = useContext(TodoItemContext);

  const postAddTodo = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });
      const result = await res.json();
      console.log(result);
      const { status, data, error } = result;

      if (!status) throw error;
      else updateTodosArray(data.todo);
      setTask("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-todos-wrapper">
      <input
        type="text"
        name="todo"
        id="todo"
        className="add-todo"
        placeholder="Add new todo..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button className="add-todo-button" onClick={postAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
