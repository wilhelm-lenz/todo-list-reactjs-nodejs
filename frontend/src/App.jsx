import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/home/Dashboard";
import { TodoItemContextProvider } from "./contextes/TodoItemContext";
import FetchTodos from "./fetchData/fetchTodos";

function App() {
  return (
    <>
      <TodoItemContextProvider>
        <FetchTodos />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
