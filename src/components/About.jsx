import {
  ShieldCheck,
  Server,
  Cloud,
  Lock,
} from "lucide-react";

import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <div className="about-left">

          <p className="section-tag">
            ABOUT ORNEXIS
          </p>

          <h2>
            Technology built
            <br />
            around your business.
          </h2>

          <p className="about-text">
            ORNEXIS Technologies is a trusted technology partner helping
            organizations build secure, reliable and future-ready digital
            environments.
          </p>

          <p className="about-text">
            We combine cybersecurity, infrastructure, cloud, digital solutions
            and practical technology guidance to solve real business challenges
            and support long-term growth.
          </p>

        </div>

        <div className="about-right">

          <div className="about-circle">
            <ShieldCheck size={70} />
          </div>

          <div className="about-card card1">
            <Server size={22} />
            <span>Reliable Infrastructure</span>
          </div>

          <div className="about-card card2">
            <Cloud size={22} />
            <span>Scalable Technology</span>
          </div>

          <div className="about-card card3">
            <Lock size={22} />
            <span>Security by Design</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;