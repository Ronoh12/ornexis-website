import {
  ShieldCheck,
  Cloud,
  Network,
  Headphones,
  Code2,
  Printer,
} from "lucide-react";

import "../styles/Solutions.css";

const solutions = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Protect your systems, users and data with practical security solutions.",
    items: [
      "Security Audits",
      "Vulnerability Assessments",
      "Endpoint Protection",
      "Risk Management",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    text: "Modernize operations with secure, scalable cloud services.",
    items: [
      "Microsoft 365",
      "Google Workspace",
      "Cloud Migration",
      "AWS & Azure",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    text: "Build reliable and secure connectivity for your business.",
    items: [
      "Office Networking",
      "Wi-Fi Installation",
      "Structured Cabling",
      "VPN Solutions",
    ],
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    text: "Keep your business systems running with responsive IT support.",
    items: [
      "Remote Support",
      "On-site Support",
      "Maintenance",
      "User & Device Support",
    ],
  },
  {
    icon: Code2,
    title: "Web & Software",
    text: "Create modern digital tools that improve operations and customer experience.",
    items: [
      "Company Websites",
      "Business Systems",
      "POS Systems",
      "Custom Software",
    ],
  },
  {
    icon: Printer,
    title: "Branding & Printing",
    text: "Support your business identity with professional branding solutions.",
    items: [
      "Business Cards",
      "Signage",
      "Banners",
      "Custom Merchandise",
    ],
  },
];

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions-container">

        <div className="solutions-heading">
          <p className="section-tag">OUR SOLUTIONS</p>

          <h2>
            Complete technology solutions
            <br />
            for modern businesses.
          </h2>

          <p>
            ORNEXIS brings together cybersecurity, cloud, infrastructure,
            support and digital services under one trusted technology partner.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article className="solution-card" key={solution.title}>
                <div className="solution-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3>{solution.title}</h3>

                <p className="solution-text">{solution.text}</p>

                <ul>
                  {solution.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a href="#contact" className="solution-link">
                  Explore solution →
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Solutions;