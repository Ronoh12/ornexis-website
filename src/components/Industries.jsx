import {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Building2,
  Factory,
  Landmark,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

import "../styles/Industries.css";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Secure systems, reliable infrastructure and dependable technology support for healthcare providers and medical organizations.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Modern networks, cloud platforms and digital solutions that support teaching, learning and institutional operations.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Reliable technology that supports payments, connectivity, customer experiences and day-to-day retail operations.",
  },
  {
    icon: Building2,
    title: "SMEs & Professional Services",
    description:
      "Practical cybersecurity, infrastructure and digital solutions designed to help growing organizations operate with confidence.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Secure networks, resilient infrastructure and dependable technology that supports efficient modern operations.",
  },
  {
    icon: Landmark,
    title: "Public Sector",
    description:
      "Secure and scalable technology solutions that support reliable services, operations and digital transformation initiatives.",
  },
];

function Industries() {
  const [startIndex, setStartIndex] = useState(0);

  const nextIndustries = () => {
    setStartIndex((current) =>
      (current + 1) % industries.length
    );
  };

  const previousIndustries = () => {
    setStartIndex((current) =>
      (current - 1 + industries.length) % industries.length
    );
  };

  const getIndustry = (offset) => {
    const index =
      (startIndex + offset) % industries.length;

    return industries[index];
  };

  const visibleIndustries = [
    getIndustry(0),
    getIndustry(1),
    getIndustry(2),
  ];

  return (
    <section className="industries" id="industries">

      <div className="industries-container">

        <div className="industries-heading">

          <p className="section-tag">
            INDUSTRIES WE SERVE
          </p>

          <h2>
            Technology built around
            <br />
            the way you work.
          </h2>

          <p className="industries-intro">
            Every industry works differently. ORNEXIS delivers secure,
            practical and scalable technology solutions shaped around your
            operational needs, challenges and growth goals.
          </p>

        </div>

        <div className="industries-carousel">

          <button
            className="industries-arrow"
            onClick={previousIndustries}
            aria-label="Previous industry"
            type="button"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="industries-grid">

            {visibleIndustries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="industry-card"
                  key={industry.title}
                >

                  <div className="industry-icon">
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3>
                    {industry.title}
                  </h3>

                  <p>
                    {industry.description}
                  </p>

                  <a
                    href="#solutions"
                    className="industry-link"
                  >
                    Explore solutions
                    <span aria-hidden="true"> →</span>
                  </a>

                </article>
              );
            })}

          </div>

          <button
            className="industries-arrow"
            onClick={nextIndustries}
            aria-label="Next industry"
            type="button"
          >
            <ChevronRight size={26} />
          </button>

        </div>

        <div className="industries-dots">

          {industries.map((industry, index) => (
            <button
              key={industry.title}
              className={
                startIndex === index
                  ? "active"
                  : ""
              }
              onClick={() => setStartIndex(index)}
              aria-label={`Show ${industry.title}`}
              type="button"
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Industries;