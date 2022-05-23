import { NavLink } from "react-router-dom";
import "./mobilenav.css";

const MobileNav = (props) => {
  return (
    <nav className="mobileNav">
      <ul>
        <li>
          <NavLink to={"/"}>
            <span className="material-icons-outlined">home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/explore"}>
            <span className="material-icons-outlined">explore</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/bookmarks"}>
            <span className="material-icons-outlined">bookmark</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
