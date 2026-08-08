import {
  ShieldCheck,
  Server,
  Cloud,
  Lock,
} from "lucide-react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">

      <div className="container">

        <div className="about-left">

          <p className="section-tag">
            ABOUT ORNEXIS
          </p>

          <h2>
            Technology solutions
            <br />
            built around your business.
          </h2>

          <p className="about-text">
            ORNEXIS Technologies helps organizations
            secure their infrastructure, modernize
            operations and accelerate growth through
            innovative IT solutions, cybersecurity
            and digital transformation.
          </p>

        </div>

        <div className="about-right">

            <div className="about-circle">
                <ShieldCheck size={70} />
            </div>

            <div className="about-card card1">
                <Server size={22} />
                <span>Secure Infrastructure</span>
            </div>

            <div className="about-card card2">
                <Cloud size={22} />
                <span>Cloud Solutions</span>
            </div>

            <div className="about-card card3">
                <Lock size={22} />
                <span>Cybersecurity</span>
            </div>

        </div>

      </div>

    </section>
  );
}

export default About;