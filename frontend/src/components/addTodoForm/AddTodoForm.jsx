import { useContext } from "react";
import "./AddTodoForm.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";

const AddTodoForm = ({ updateTodosArray }) => {
  const { task, setTask } = useContext(TodoItemContext);

  const postAddTodo = async () => {
    try {
      const res = await fetch("http://localhost:3064/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task }),
      });
      const data = await res.json();
      const { success, articles, error } = data;

      if (!success) throw error;
      else updateTodosArray(articles);
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
