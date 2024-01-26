import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import { TodoItemContextProvider } from "./contextes/TodoItemContext";

import TodosApp from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import Logo from "./components/logo/Logo";
import NavBar from "./components/navbar/NavBar";
import FetchTodos from "./fetchData/FetchTodos";

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
            <Route path={`/app/today`} element={<Dashboard />} />
            <Route path="/app/entrance" element={<Dashboard />} />
            <Route path="/app/upcoming" element={<Dashboard />} />
            <Route path="/app/filters" element={<Dashboard />} />
            <Route path="/app/project" element={<Dashboard />} />
          </Routes>
        </div>
      </TodoItemContextProvider>
    </>
  );
}

export default App;
