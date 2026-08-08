import "../styles/Navbar.css";
import logo from "../assets/Tech_Ornexis.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-brand" href="#home">
          <img
            className="navbar-logo"
            src={logo}
            alt="ORNEXIS Technologies"
          />
        </a>

        <ul className="navbar-links">
          <li>
            <a href="#home" className="active">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#solutions">Solutions</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a className="navbar-button" href="#contact">
          Get a Quote
        </a>
      </div>
    </nav>
  );
}

export default Navbar;