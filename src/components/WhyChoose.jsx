import {
  ShieldCheck,
  Clock3,
  Headset,
  CloudCog,
  Workflow,
  BadgeCheck,
} from "lucide-react";

import "../styles/WhyChoose.css";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Every solution is designed with protection, resilience and business continuity in mind.",
  },
  {
    icon: Clock3,
    title: "Fast Response",
    description:
      "We respond quickly to technology issues so your operations experience less disruption.",
  },
  {
    icon: Headset,
    title: "Reliable Support",
    description:
      "Practical support for users, devices, networks and business-critical systems.",
  },
  {
    icon: CloudCog,
    title: "Modern Solutions",
    description:
      "Secure cloud, networking and digital tools built around your organization’s needs.",
  },
  {
    icon: Workflow,
    title: "Business Focused",
    description:
      "We use technology to improve productivity, efficiency and long-term business growth.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Partnership",
    description:
      "Clear communication, honest advice and dependable service throughout every project.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <div className="why-choose-heading">
          <p className="section-tag">WHY CHOOSE ORNEXIS</p>

          <h2>Technology expertise you can rely on.</h2>

          <p>
            We combine security, reliability and practical business thinking to
            deliver technology solutions that create lasting value.
          </p>
        </div>

        <div className="why-choose-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="reason-card" key={reason.title}>
                <div className="reason-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;