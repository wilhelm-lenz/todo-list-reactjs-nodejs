import { useContext } from "react";
import "./AddTodoForm.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";

const AddTodoForm = ({ updateTodosArray }) => {
  const { task, setTask } = useContext(TodoItemContext);

  const addTodo = () => {
    fetch("http://localhost:3064/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then(({ success, articles, error }) => {
        if (!success) throw error;
        else updateTodosArray(articles);
        setTask("");
      })
      .catch((err) => console.log(err));
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
      <button className="add-todo-button" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodoForm;
