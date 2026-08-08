import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Factory,
  Landmark,
} from "lucide-react";

import "../styles/Industries.css";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Secure infrastructure, reliable systems and technology support for healthcare organizations.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Modern networks, cloud services and digital solutions for schools and learning institutions.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Reliable technology solutions that support payments, connectivity, operations and customer experiences.",
  },
  {
    icon: Building2,
    title: "SMEs & Professional Services",
    description:
      "Practical IT, cybersecurity and cloud solutions designed for growing organizations.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Secure networks, resilient infrastructure and dependable technology for modern operations.",
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description:
      "Secure and scalable technology solutions that support reliable digital services and operations.",
  },
];

function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries-container">

        <div className="industries-heading">
          <p className="section-tag">INDUSTRIES WE SERVE</p>

          <h2>
            Technology built around
            <br />
            the way you work.
          </h2>

          <p className="industries-intro">
            From growing businesses to complex organizations, ORNEXIS delivers
            secure and practical technology solutions tailored to different
            industries and operational needs.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.title}>
                <div className="industry-icon">
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <span className="industry-link">
                  Explore solutions →
                </span>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Industries;