import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Globe2,
  Network,
} from "lucide-react";

import "../styles/Portfolio.css";

const projects = [
    {
        icon: ShieldCheck,
        category: "Cybersecurity",
        title: "Security Infrastructure Upgrade",
        slug: "security-infrastructure-upgrade",
        text: "A complete security improvement project focused on stronger protection, safer access and better operational resilience.",
        tags: ["Security", "Risk", "Infrastructure"],
    },
    {
        icon: Globe2,
        category: "Digital Transformation",
        title: "Modern Business Website",
        slug: "modern-business-website",
        text: "A responsive and professional company website designed to improve credibility, customer experience and digital presence.",
        tags: ["Web", "Branding", "Digital"],
    },
    {
        icon: Network,
        category: "Networking",
        title: "Secure Office Network",
        slug: "secure-office-network",
        text: "A reliable office network solution built around secure connectivity, structured cabling and dependable business access.",
        tags: ["Networking", "Wi-Fi", "Infrastructure"],
    },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">

        <div className="portfolio-heading">
          <p className="section-tag">FEATURED PROJECTS</p>

          <h2>
            Practical technology.
            <br />
            Real business outcomes.
          </h2>

          <p>
            A selection of project types that demonstrate how ORNEXIS can help
            organizations improve security, infrastructure and digital
            operations.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="portfolio-card" key={project.title}>
                <div className="portfolio-top">
                  <div className="portfolio-icon">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>

                  <span>{project.category}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.text}</p>

                <div className="portfolio-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <Link
                    to={`/projects/${project.slug}`}
                    className="portfolio-link"
                >
                    Learn More →
                </Link>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;