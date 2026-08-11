import {
  ShieldCheck,
  Network,
  Code2,
  Workflow,
  Printer,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

import "../styles/Services.css";

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect your systems, people and data with practical security solutions designed to reduce risk and strengthen business resilience.",
  },
  {
    icon: Network,
    title: "IT Infrastructure",
    description:
      "Build secure, reliable and scalable networks, cloud environments and technology foundations that support everyday business operations.",
  },
  {
    icon: Code2,
    title: "Software & Digital Solutions",
    description:
      "Create websites, business systems and digital tools that simplify operations, improve customer experiences and support growth.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "Modernize processes, automate repetitive work and adopt smarter technologies that help your organization operate more efficiently.",
  },
  {
    icon: Printer,
    title: "Branding & Print Solutions",
    description:
      "Strengthen your business identity through professional branding, corporate materials, signage and high-quality print solutions.",
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description:
      "Make confident technology decisions with practical guidance, technology planning, security reviews and long-term digital strategy.",
  },
];

function Services() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;

  const nextServices = () => {
    setStartIndex((current) =>
      current + visibleCount >= services.length
        ? 0
        : current + visibleCount
    );
  };

  const previousServices = () => {
    setStartIndex((current) =>
      current - visibleCount < 0
        ? services.length - visibleCount
        : current - visibleCount
    );
  };

  const visibleServices = services.slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    <section className="services" id="services">
      <div className="services-header">
        <p className="section-label">
          OUR SERVICES
        </p>

        <h2>
          Technology that protects,
          <br />
          connects and grows your business.
        </h2>

        <p className="services-intro">
          ORNEXIS brings together security, infrastructure, digital solutions
          and business technology under one trusted technology partner.
        </p>
      </div>

      <div className="services-carousel">

        <button
          className="services-arrow services-arrow-left"
          onClick={previousServices}
          aria-label="Previous services"
          type="button"
        >
          <ChevronLeft size={26} />
        </button>

        <div className="services-grid">
          {visibleServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.title}
              >
                <div className="service-icon">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                  />
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <a href="#contact">
                  Explore solution
                  <span aria-hidden="true"> →</span>
                </a>
              </article>
            );
          })}
        </div>

        <button
          className="services-arrow services-arrow-right"
          onClick={nextServices}
          aria-label="Next services"
          type="button"
        >
          <ChevronRight size={26} />
        </button>

      </div>

      <div className="services-dots">
        <button
          className={startIndex === 0 ? "active" : ""}
          onClick={() => setStartIndex(0)}
          aria-label="Show first services"
          type="button"
        />

        <button
          className={startIndex === 3 ? "active" : ""}
          onClick={() => setStartIndex(3)}
          aria-label="Show more services"
          type="button"
        />
      </div>

    </section>
  );
}

export default Services;