import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <section className="logo-wrapper">
      <Link className="logo" to={"/"}>
        Todolisto.io
      </Link>
    </section>
  );
};

export default Logo;
