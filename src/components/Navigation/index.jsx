import { NavLink } from "react-router-dom";
import "../../utils/styles/NavigationStyle.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) =>
            nav.isActive ? "navigation-link--active" : "navigation-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) =>
            nav.isActive ? "navigation-link--active" : "navigation-link"
          }
        >
          A Propos
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
