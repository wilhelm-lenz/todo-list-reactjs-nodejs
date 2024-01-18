import "./TodoListItem.scss";

const TodoListItem = ({ id, todo, done, updateTodosArray }) => {
  const deleteTodo = (id) => {
    fetch(`http://localhost:3064/api/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(({ success, result, error }) => {
        if (!success) throw error;
        updateTodosArray(result);
      });
  };
  return (
    <li>
      <input type="checkbox" name="" id="" />
      <span className={done ? "done-todo" : null}>{todo}</span>
      <span onClick={() => deleteTodo(id)}>X</span>
    </li>
  );
};

export default TodoListItem;
