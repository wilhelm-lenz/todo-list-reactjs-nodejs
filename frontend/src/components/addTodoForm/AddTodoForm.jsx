/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./AddTodoForm.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";
import { backendUrl } from "../../../api/api";

const AddTodoForm = ({ updateTodosArray }) => {
  const { todosData, title, setTitle } = useContext(TodoItemContext);

  const postAddTodo = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      const result = await res.json();
      console.log(result);
      const { status, data, error } = result;
      console.log(data);
      if (!status) throw error;
      else console.log(data);
      const newTodosArray = [...todosData, data.todo];
      updateTodosArray(newTodosArray);
      setTitle("");
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
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="add-todo-button" onClick={postAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
