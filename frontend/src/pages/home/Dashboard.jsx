import { useContext } from "react";
import AddTodoForm from "../../components/addTodoForm/AddTodoForm";
import TodoList from "../../components/todoList/TodoList";
import "./Dashboard.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";

const Dashboard = () => {
  const { setTodosData } = useContext(TodoItemContext);
  return (
    <section>
      <AddTodoForm updateTodosArray={setTodosData} />
      <TodoList />
    </section>
  );
};

export default Dashboard;
