import {
  ShieldCheck,
  Clock3,
  Headset,
  CloudCog,
  Workflow,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";

import "../styles/WhyChoose.css";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Security by Design",
    description:
      "Security is built into every solution from the beginning, helping reduce risk and strengthen business resilience.",
  },
  {
    icon: Clock3,
    title: "Responsive Service",
    description:
      "We act quickly, communicate clearly and work to minimize disruption when technology issues affect your business.",
  },
  {
    icon: Headset,
    title: "Dependable Support",
    description:
      "Practical support for users, systems and infrastructure with a focus on keeping your operations running smoothly.",
  },
  {
    icon: CloudCog,
    title: "Future-Ready Solutions",
    description:
      "We design secure and scalable technology environments that can adapt as your organization grows and changes.",
  },
  {
    icon: Workflow,
    title: "Business-Focused Thinking",
    description:
      "We recommend technology based on real business needs, helping improve efficiency, productivity and long-term value.",
  },
  {
    icon: BadgeCheck,
    title: "Partnership You Can Trust",
    description:
      "Clear communication, honest guidance and consistent delivery are at the heart of every ORNEXIS relationship.",
  },
];

function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(1);

  const previousReason = () => {
    setActiveIndex((current) =>
      current === 0 ? reasons.length - 1 : current - 1
    );
  };

  const nextReason = () => {
    setActiveIndex((current) =>
      current === reasons.length - 1 ? 0 : current + 1
    );
  };

  const getReasonIndex = (offset) => {
    return (
      activeIndex +
      offset +
      reasons.length
    ) % reasons.length;
  };

  const visibleReasons = [
    {
      reason: reasons[getReasonIndex(-1)],
      position: "left",
    },
    {
      reason: reasons[getReasonIndex(0)],
      position: "center",
    },
    {
      reason: reasons[getReasonIndex(1)],
      position: "right",
    },
  ];

  return (
    <section className="why-choose" id="why-choose">

      <div className="why-choose-container">

        <div className="why-choose-header">

          <p className="section-label">
            WHY CHOOSE ORNEXIS
          </p>

          <h2>
            Technology expertise.
            <br />
            Partnership you can trust.
          </h2>

          <p className="why-choose-intro">
            We combine technical expertise, practical business thinking and
            dependable service to help organizations make confident technology
            decisions and achieve lasting value.
          </p>

        </div>

        <div className="why-choose-carousel">

          <button
            className="why-arrow"
            onClick={previousReason}
            aria-label="Previous reason"
            type="button"
          >
            <ChevronLeft size={26} />
          </button>

          <div className="why-spotlight">

            {visibleReasons.map(({ reason, position }) => {
              const Icon = reason.icon;

              return (
                <article
                  className={`reason-card reason-card-${position}`}
                  key={`${reason.title}-${position}`}
                >

                  <div className="reason-icon">
                    <Icon
                      size={28}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3>
                    {reason.title}
                  </h3>

                  <p>
                    {reason.description}
                  </p>

                </article>
              );
            })}

          </div>

          <button
            className="why-arrow"
            onClick={nextReason}
            aria-label="Next reason"
            type="button"
          >
            <ChevronRight size={26} />
          </button>

        </div>

        <div className="why-dots">

          {reasons.map((reason, index) => (
            <button
              key={reason.title}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${reason.title}`}
              type="button"
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;