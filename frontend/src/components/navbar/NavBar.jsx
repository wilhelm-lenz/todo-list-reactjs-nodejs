import { NavLink } from "react-router-dom";
import Profile from "../profile/Profile";
import "./NavBar.scss";
import Search from "../search/Search";
import PlusIcon from "../../../public/images/PlusIcon";
import SoonCalenerdIcon from "../../../public/images/SoonCalenderIcon";
import TodayCalenerdIcon from "../../../public/images/TodayCalenderIcon";

const NavBar = () => {
  return (
    <nav>
      <section className="section-profile">
        {" "}
        <Profile />
      </section>
      <section className="section-todos-directions">
        <NavLink
          className="nav-link add-task-link"
          onClick={() => console.log("Placeholder")}
        >
          {<PlusIcon />}Aufgabe hinzufügen
        </NavLink>
        <Search />
        <NavLink className="nav-link" to="/app/entrance">
          Eingang
        </NavLink>
        <NavLink className="nav-link" to="/app/today">
          {<TodayCalenerdIcon />} Heute
        </NavLink>
        <NavLink className="nav-link" to="/app/upcoming">
          {<SoonCalenerdIcon />} Demnächst
        </NavLink>
        <NavLink className="nav-link" to="/app/filters">
          Filter und Etiketten
        </NavLink>
      </section>
      <section className="favorites">Favoriten</section>
      <section className="teams">Meine Projekte</section>
    </nav>
  );
};

export default NavBar;
