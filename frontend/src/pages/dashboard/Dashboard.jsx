import { Fragment, useContext } from "react";
import AddTodoForm from "../../components/addTodoForm/AddTodoForm";
import TodoList from "../../components/todoList/TodoList";
import "./Dashboard.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import Logo from "../../components/logo/Logo";
import NavBar from "../../components/navbar/NavBar";
import TodosApp from "../todosApp/TodosApp";

const Dashboard = () => {
  const { setTodosData } = useContext(TodoItemContext);
  return (
    <>
      <Main>
        <TodosApp />
        <AddTodoForm updateTodosArray={setTodosData} />
        <TodoList />
      </Main>
    </>
  );
};

export default Dashboard;
