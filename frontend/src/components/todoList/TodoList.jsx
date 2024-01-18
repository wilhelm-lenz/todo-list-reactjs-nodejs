import { useContext, useEffect, useState } from "react";
import TodoListItem from "../todoListItem/TodoListItem";
import AddTodoForm from "../addTodoForm/AddTodoForm";
import "./TodoList.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";
import { useLocation } from "react-router-dom";

const TodoList = () => {
  const location = useLocation();
  const locationString = location.pathname.split("/").slice(-1).join();

  const { todosData, setTodosData } = useContext(TodoItemContext);
  const [todos, setTodos] = useState([]);

  if (locationString === "today") {
    const date = new Date(Date.now());
    const day = date.getDate();
    const monthNumber = date.getMonth();
    const fullYear = date.getFullYear();

    const todayDate = `${fullYear}-${monthNumber < 10 ? 0 : null}${
      monthNumber + 1
    }-${day}`;

    const filteredByDateToday = todosData.filter(
      (todo) => todo?.created_at === todayDate
    );

    useEffect(() => {
      setTodos(filteredByDateToday);
    }, [todosData]);
  }
  if (locationString === "entrance") {
    useEffect(() => {
      setTodos(todosData);
    }, [todosData]);
  }

  return (
    <>
      <ul className="todo-list">
        {todos?.map((todoObj) => (
          <TodoListItem
            key={todoObj.id}
            id={todoObj.id}
            todo={todoObj.task}
            done={todoObj.done}
            updateTodosArray={setTodosData}
          />
        ))}
      </ul>
      <AddTodoForm updateTodosArray={setTodosData} />
    </>
  );
};

export default TodoList;
