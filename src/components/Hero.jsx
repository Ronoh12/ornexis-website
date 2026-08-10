import {
  ShieldCheck,
  Network,
  CloudCog,
  CalendarDays,
  ArrowRight,
  BarChart3,
  Users,
} from "lucide-react";

import Reveal from "../animations/Reveal";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT SIDE */}
      <Reveal>
        <div className="hero-text">

          <p className="small-title">
            YOUR TRUSTED TECHNOLOGY PARTNER
          </p>

          <h1>
            Grow Your Business
            <br />
            With Confidence<span className="hero-dot">.</span>
          </h1>

          <p className="description">
            ORNEXIS Technologies helps organizations protect what matters,
            simplify technology and build secure, reliable digital environments
            designed for long-term growth.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="primary-btn">
              <CalendarDays size={19} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={18} />
            </a>

            <a href="#solutions" className="secondary-btn">
              <span>Explore Our Solutions</span>
              <ArrowRight size={18} />
            </a>

          </div>

          {/* TRUST / VALUE POINTS */}
          <div className="hero-value-strip">

            <div className="hero-value-item">
              <div className="hero-value-icon">
                <ShieldCheck size={25} />
              </div>

              <div>
                <h3>Secure by Design</h3>
                <p>Security built into everything we do.</p>
              </div>
            </div>

            <div className="hero-value-item">
              <div className="hero-value-icon">
                <BarChart3 size={25} />
              </div>

              <div>
                <h3>Reliable & Scalable</h3>
                <p>Solutions designed to grow with you.</p>
              </div>
            </div>

            <div className="hero-value-item">
              <div className="hero-value-icon">
                <Users size={25} />
              </div>

              <div>
                <h3>Focused on Results</h3>
                <p>Technology that delivers business value.</p>
              </div>
            </div>

          </div>

        </div>
      </Reveal>

      {/* RIGHT SIDE */}
      <Reveal delay={0.2} y={30}>
        <div className="hero-visual">

          <div className="hero-shield">
            <ShieldCheck size={72} strokeWidth={1.5} />
          </div>

          <div className="hero-feature hero-feature-one">
            <Network size={22} />
            <span>Secure by Design</span>
          </div>

          <div className="hero-feature hero-feature-two">
            <CloudCog size={22} />
            <span>Built for Growth</span>
          </div>

        </div>
      </Reveal>

    </section>
  );
}

export default Hero;