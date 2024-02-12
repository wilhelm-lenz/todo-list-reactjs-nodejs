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
  useEffect(() => {
    if (locationString === "today") {
      const date = new Date(Date.now());
      const day = date.getDate();
      const monthNumber = date.getMonth();
      const fullYear = date.getFullYear();

      const todayDate = `${fullYear}-${monthNumber < 10 ? 0 : null}${
        monthNumber + 1
      }-${day}`;
      console.log(todosData);
      const filteredByDateToday = todosData?.filter((todo) => {
        const date = new Date(todo.createdAt);
        const day = date.getDate();
        const monthNumber = date.getMonth();
        const fullYear = date.getFullYear();

        const createdDate = `${fullYear}-${monthNumber < 10 ? 0 : null}${
          monthNumber + 1
        }-${day}`;

        return createdDate === todayDate;
      });
      setTodos(filteredByDateToday);
    } else if (locationString === "entrance") {
      setTodos(todosData);
    }
  }, [todosData]);

  return (
    <>
      <ul className="todo-list">
        {todos?.map((todoObj) => (
          <TodoListItem
            key={todoObj._id}
            id={todoObj._id}
            title={todoObj.title}
            description={todoObj.description}
            priotity={todoObj.priotity}
            status={todoObj.status}
            updateTodosArray={setTodosData}
          />
        ))}
      </ul>
      <AddTodoForm updateTodosArray={setTodosData} />
    </>
  );
};

export default TodoList;
