import { useLocation } from "react-router-dom";
import "./Dashboard.scss";
import TodayTodos from "../../components/todayTodos/TodayTodos";
import IncomingTodos from "../../components/incomingTodos/IncomingTodos";
import UpcomingTodos from "../../components/upcomingTodos/UpcomingTodos";
import Filters from "../../components/filters/Filters";

const TodosApp = () => {
  const location = useLocation();
  const locationString = location.pathname.split("/").slice(-1).join();

  if (locationString === "today") {
    return <TodayTodos />;
  } else if (locationString === "entrance") {
    return <IncomingTodos />;
  } else if (locationString === "upcoming") {
    return <UpcomingTodos />;
  } else if (locationString === "filters") {
    return <Filters />;
  }

  return <></>;
};

export default TodosApp;
