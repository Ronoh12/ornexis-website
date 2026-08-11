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
            alt="ORNEXIS Technologies"
            className="footer-logo"
          />

          <p>
            Empowering businesses through secure,
            reliable and innovative technology solutions.
          </p>

        </div>

        <div className="footer-column">
          <h3>Company</h3>

          <a href="#about">About ORNEXIS</a>
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#portfolio">Solution Showcase</a>
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>

          <a href="#solutions">Cybersecurity</a>
          <a href="#solutions">Cloud & Collaboration</a>
          <a href="#solutions">Network & Infrastructure</a>
          <a href="#solutions">Managed IT Support</a>
          <a href="#solutions">Web & Business Systems</a>
          <a href="#solutions">Branding & Print</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <a
            href="mailto:info@ornexis.com"
            className="contact-item"
          >
            <Mail size={18} />
            <span>info@ornexis.com</span>
          </a>

          <a
            href="tel:+254700000000"
            className="contact-item"
          >
            <Phone size={18} />
            <span>+254 700 000 000</span>
          </a>

          <div className="contact-item contact-location">
            <MapPin size={18} />
            <span>Nakuru, Kenya</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ORNEXIS Technologies Ltd. All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;