import { useContext } from "react";
import TodoListItem from "../todoListItem/TodoListItem";
import "./TodoList.scss";
import { TodoItemContext } from "../../contextes/TodoItemContext";

const TodoList = () => {
  const { todosData, setTodosData } = useContext(TodoItemContext);

  return (
    <ul>
      {todosData?.map((todoObj) => (
        <TodoListItem
          key={todoObj.id}
          id={todoObj.id}
          todo={todoObj.task}
          done={todoObj.done}
          updateTodosArray={(newTodosArray) => setTodosData(newTodosArray)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
