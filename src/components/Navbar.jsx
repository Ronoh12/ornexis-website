import { NavLink, Link } from "react-router-dom";

import "../styles/Navbar.css";
import logo from "../assets/Tech_Ornexis.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="ORNEXIS Technologies"
            className="navbar-logo-image"
          />
        </Link>
        <ul className="navbar-links">

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <a href="/#about">
              About
            </a>
          </li>

          <li>
            <a href="/#solutions">
              Solutions
            </a>
          </li>

          <li>
            <a href="/#contact">
              Contact
            </a>
          </li>

        </ul>

        <a
          className="navbar-button"
          href="/#contact"
        >
          Get a Quote
        </a>

      </div>
    </nav>
  );
}

export default Navbar;