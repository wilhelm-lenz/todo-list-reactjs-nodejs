import AddTodoForm from "../../components/addTodoForm/AddTodoForm";
import TodoList from "../../components/todoList/TodoList";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <section>
      <AddTodoForm />
      <TodoList />
    </section>
  );
};

export default Dashboard;
