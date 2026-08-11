import {
  ShieldCheck,
  Cloud,
  Network,
  Headphones,
  Code2,
  Printer,
} from "lucide-react";

import { useState } from "react";

import "../styles/Solutions.css";

const solutions = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Solutions",
    shortTitle: "Cybersecurity",
    text:
      "Strengthen your security posture with practical controls that protect systems, users and business data.",
    items: [
      "Security Assessments",
      "Vulnerability Management",
      "Endpoint Protection",
      "Risk & Security Reviews",
    ],
  },

  {
    icon: Cloud,
    title: "Cloud & Collaboration",
    shortTitle: "Cloud",
    text:
      "Build secure, flexible cloud environments that support modern teams, communication and business operations.",
    items: [
      "Microsoft 365",
      "Google Workspace",
      "Cloud Migration",
      "AWS & Azure",
    ],
  },

  {
    icon: Network,
    title: "Network & Infrastructure",
    shortTitle: "Infrastructure",
    text:
      "Create secure and reliable connectivity that supports everyday operations, users and business growth.",
    items: [
      "Office Networking",
      "Secure Wi-Fi",
      "Structured Cabling",
      "VPN & Remote Access",
    ],
  },

  {
    icon: Headphones,
    title: "Managed IT & Support",
    shortTitle: "IT Support",
    text:
      "Keep your technology environment stable, supported and available with responsive technical assistance.",
    items: [
      "Remote Support",
      "On-site Support",
      "System Maintenance",
      "User & Device Support",
    ],
  },

  {
    icon: Code2,
    title: "Web & Business Systems",
    shortTitle: "Web & Systems",
    text:
      "Build digital platforms and business tools designed to improve operations, visibility and customer experience.",
    items: [
      "Company Websites",
      "Business Systems",
      "POS Solutions",
      "Custom Software",
    ],
  },

  {
    icon: Printer,
    title: "Branding & Print",
    shortTitle: "Branding",
    text:
      "Build a stronger business identity through professional branding, printed materials and branded merchandise.",
    items: [
      "Business Cards",
      "Signage",
      "Banners",
      "Custom Merchandise",
    ],
  },
];

function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = solutions[activeIndex];
  const ActiveIcon = activeSolution.icon;

  return (
    <section className="solutions" id="solutions">

      <div className="solutions-container">

        <div className="solutions-heading">

          <p className="section-tag">
            OUR SOLUTIONS
          </p>

          <h2>
            Complete technology solutions
            <br />
            for modern businesses.
          </h2>

          <p className="solutions-intro">
            From protection and connectivity to cloud, support and digital
            platforms, ORNEXIS brings together the technology capabilities
            businesses need to operate securely and grow with confidence.
          </p>

        </div>

        <div className="solutions-tabs">

          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <button
                key={solution.title}
                className={`solution-tab ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                />

                <span>
                  {solution.shortTitle}
                </span>
              </button>
            );
          })}

        </div>

        <div className="solution-showcase">

          <div className="solution-showcase-icon">
            <ActiveIcon
              size={42}
              strokeWidth={1.7}
            />
          </div>

          <div className="solution-showcase-content">

            <p className="solution-showcase-label">
              ORNEXIS SOLUTION
            </p>

            <h3>
              {activeSolution.title}
            </h3>

            <p className="solution-showcase-text">
              {activeSolution.text}
            </p>

            <div className="solution-feature-list">
              {activeSolution.items.map((item) => (
                <div
                  className="solution-feature-item"
                  key={item}
                >
                  <span className="solution-feature-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="solution-showcase-link"
            >
              Explore this solution
              <span aria-hidden="true"> →</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Solutions;