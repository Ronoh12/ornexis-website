import { ShieldCheck, Network, CloudCog } from "lucide-react";
import "../styles/Hero.css";
import Reveal from "../animations/Reveal";

function Hero() {
  return (
    <section className="hero">
      <Reveal>
        <div className="hero-text">
        <p className="small-title">
          TRUSTED TECHNOLOGY PARTNER
        </p>

        <h1>
          Securing Tomorrow.
          <br />
          Empowering Business.
        </h1>

        <p className="description">
          ORNEXIS Technologies helps businesses protect their systems,
          modernize their IT infrastructure and grow through secure,
          reliable and innovative technology solutions.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" type="button">
            Get Started
          </button>

          <button className="secondary-btn" type="button">
            Learn More
          </button>
        </div>
      </div>
</Reveal>

      <Reveal delay={0.2} y={30}>
        <div className="hero-visual">
        <div className="hero-shield">
          <ShieldCheck size={72} strokeWidth={1.5} />
        </div>

        <div className="hero-feature hero-feature-one">
          <Network size={24} />
          <span>Secure Networks</span>
        </div>

        <div className="hero-feature hero-feature-two">
          <CloudCog size={24} />
          <span>Protected Cloud</span>
        </div>
      </div>
</Reveal>
    </section>
  );
}

export default Hero;