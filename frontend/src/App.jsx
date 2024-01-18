import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import { TodoItemContextProvider } from "./contextes/TodoItemContext";
import FetchTodos from "./fetchData/fetchTodos";
import TodosApp from "./pages/todosApp/TodosApp";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <TodoItemContextProvider>
        <div className="dashboard-wrapper">
          <Header>
            <Logo />
            <NavBar />
          </Header>
          <FetchTodos />
          <Routes>
            <Route path="/" element={<Navigate to="/app/today" />} />
            <Route path={`/app/today`} element={<TodosApp />} />
            <Route path="/app/entrance" element={<TodosApp />} />
            <Route path="/app/upcoming" element={<TodosApp />} />
            <Route path="/app/filters" element={<TodosApp />} />
            <Route path="/app/project" element={<TodosApp />} />
          </Routes>
        </div>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
