import "./TodayTodos.scss";
import TodoList from "../todoList/TodoList";
import { useContext, useEffect } from "react";
import { TodoItemContext } from "../../contextes/TodoItemContext";

const TodayTodos = () => {
  return (
    <section className="section-today-todos todos-app-container">
      <h2 className="heading-primary">Heute</h2>
      <TodoList />
    </section>
  );
};

export default TodayTodos;
