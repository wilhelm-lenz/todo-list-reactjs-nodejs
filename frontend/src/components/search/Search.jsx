import { NavLink } from "react-router-dom";
import "./Search.scss";
import SearchIcon from "../../../public/images/SearchIcon";

const Search = () => {
  return (
    <NavLink
      className="nav-link"
      onClick={() => console.log("Search function placeholder")}
    >
      {<SearchIcon />}Suche
    </NavLink>
  );
};

export default Search;
