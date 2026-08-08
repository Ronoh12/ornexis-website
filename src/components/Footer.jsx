import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../assets/Tech_Ornexis.png";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
            <img
            src={logo}
            alt="ORNEXIS Technologies Ltd"
            className="footer-logo"
            />

            <p>
                Empowering businesses through secure,
                reliable and innovative technology
                solutions.
            </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>

          <a href="#services">Cybersecurity</a>
          <a href="#services">Cloud Solutions</a>
          <a href="#services">IT Support</a>
          <a href="#services">Networking</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            <Mail size={18} />
            info@ornexis.com
          </p>

          <p>
            <Phone size={18} />
            +254 700 000 000
          </p>

          <p>
            <MapPin size={18} />
            Nakuru, Kenya
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ORNEXIS Technologies Ltd. All rights reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;