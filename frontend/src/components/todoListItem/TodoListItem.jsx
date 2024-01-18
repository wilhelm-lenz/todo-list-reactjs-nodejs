import "./TodoListItem.scss";

const TodoListItem = ({ id, todo, done, updateTodosArray }) => {
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
    <li>
      <input type="checkbox" name="" id="" onClick={() => updateTodo(id)} />
      <span className={done ? "done-todo" : null}>{todo}</span>
      <span onClick={() => deleteTodo(id)}>X</span>
    </li>
  );
};

export default TodoListItem;
