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
      .then(({ success, result, error }) => {
        if (!success) throw error;
        else updateTodosArray(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Add new todo..."
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;
