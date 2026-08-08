import "../styles/ProjectDetails.css";
import "../styles/ProjectPage.css";
import { useParams } from "react-router-dom";
import cybersecurityImage from "../assets/cybersecurity-project.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = {
  "security-infrastructure-upgrade": {
    title: "Security Infrastructure Upgrade",
    category: "Cybersecurity",
    description:
      "A complete security improvement project focused on stronger protection, safer access and better operational resilience.",
  },

  "modern-business-website": {
    title: "Modern Business Website",
    category: "Digital Transformation",
    description:
      "A responsive company website designed to improve credibility, customer experience and digital presence.",
  },

  "secure-office-network": {
    title: "Secure Office Network",
    category: "Networking",
    description:
      "A reliable office network built around secure connectivity, structured cabling and dependable business access.",
  },
};

export default function ProjectPage() {
  const { slug } = useParams();

  const project = projects[slug];

  if (!project) {
    return (
      <section className="project-page">
        <div className="project-page-container">
          <span className="project-category">
            ORNEXIS
          </span>

          <h1>Project Not Found</h1>

          <p className="project-page-description">
            The project you are looking for could not be found.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
     <Navbar />
      <section className="project-page">
        <div className="project-page-container">
          <span className="project-category">
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>

          <p className="project-page-description">
            {project.description}
          </p>
        </div>
      </section>

      <section className="project-section">

            <div className="project-two-column">

                <div>

                <h2>The Challenge</h2>

                <p>
                    Modern organizations depend on secure and reliable technology
                    infrastructure. This project focuses on improving protection,
                    access control, system resilience and operational security while
                    minimizing business disruption.
                </p>

                </div>

                <div className="project-image">

                <img
                    src={cybersecurityImage}
                    alt="Cybersecurity Project"
                />

                </div>

            </div>

        </section>

      <section className="project-section">
        <h2>ORNEXIS Solution</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Security Assessment</h3>

            <p>
              Review the existing environment, identify risks and determine
              practical priorities for improvement.
            </p>
          </div>

          <div className="project-card">
            <h3>Infrastructure Hardening</h3>

            <p>
              Strengthen systems, network access and security controls using
              appropriate technology and configuration practices.
            </p>
          </div>

          <div className="project-card">
            <h3>Endpoint Protection</h3>

            <p>
              Improve protection for business computers, users and critical
              devices against common security threats.
            </p>
          </div>

          <div className="project-card">
            <h3>Monitoring & Support</h3>

            <p>
              Establish better visibility, ongoing maintenance and responsive
              technical support.
            </p>
          </div>
        </div>
      </section>
      <section className="project-section">
  <h2>Technologies Used</h2>

  <div className="project-tech-grid">
    <div className="project-tech-item">Microsoft 365</div>
    <div className="project-tech-item">Microsoft Defender</div>
    <div className="project-tech-item">Cisco Networking</div>
    <div className="project-tech-item">Windows Server</div>
    <div className="project-tech-item">Azure</div>
    <div className="project-tech-item">Security Monitoring</div>
  </div>
</section>

<section className="project-section">
  <h2>Project Approach</h2>

  <div className="project-timeline">

    <div className="timeline-item">
      <span className="timeline-number">01</span>

      <div>
        <h3>Assessment</h3>
        <p>
          Review the environment, infrastructure, users and existing
          security controls.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <span className="timeline-number">02</span>

      <div>
        <h3>Planning</h3>
        <p>
          Define priorities, recommended controls and an implementation
          roadmap based on business requirements.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <span className="timeline-number">03</span>

      <div>
        <h3>Implementation</h3>
        <p>
          Deploy agreed security improvements, configurations and
          infrastructure changes.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <span className="timeline-number">04</span>

      <div>
        <h3>Testing & Support</h3>
        <p>
          Validate the environment, document the solution and provide
          ongoing support where required.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="project-section">
  <h2>Expected Business Outcomes</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>Stronger Protection</h3>
      <p>
        Better safeguards for systems, users and important business data.
      </p>
    </div>

    <div className="project-card">
      <h3>Reduced Risk</h3>
      <p>
        Improved controls designed to reduce common operational and
        cybersecurity risks.
      </p>
    </div>

    <div className="project-card">
      <h3>Better Visibility</h3>
      <p>
        Improved awareness of systems, devices and security activity.
      </p>
    </div>

    <div className="project-card">
      <h3>Reliable Operations</h3>
      <p>
        A stronger technology foundation for stable and dependable
        business operations.
      </p>
    </div>

  </div>
</section>

<section className="project-section">

    <h2>Project Results</h2>

    <div className="stats-grid">

        <div className="stat-card">
            <h3>99.9%</h3>
            <p>Infrastructure Availability</p>
        </div>

        <div className="stat-card">
            <h3>60%</h3>
            <p>Risk Reduction</p>
        </div>

        <div className="stat-card">
            <h3>24/7</h3>
            <p>Monitoring & Support</p>
        </div>

        <div className="stat-card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
        </div>

    </div>

</section>

<section className="project-cta">
  <div className="project-cta-content">

    <span className="project-category">
      WORK WITH ORNEXIS
    </span>

    <h2>Need a similar technology solution?</h2>

    <p>
      Tell us about your business needs and let ORNEXIS help you build
      a secure, reliable and scalable technology environment.
    </p>

    <a href="/#contact" className="project-cta-button">
      Get a Free Consultation
    </a>

  </div>
</section>

<Footer />
    </>
  );
}