import TodoList from "../todoList/TodoList";
import "./IncomingTodos.scss";

const IncomingTodos = () => {
  return (
    <section className="section-incomming-todos todos-app-container">
      <h2 className="heading-primary">Eingang</h2>
      <TodoList />
    </section>
  );
};

export default IncomingTodos;
