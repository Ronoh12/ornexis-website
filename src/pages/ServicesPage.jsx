import { useState } from "react";

import {
  ShieldCheck,
  Server,
  Code2,
  Workflow,
  Printer,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "../styles/ServicesPage.css";

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Protect systems, users and business data through practical security controls designed to reduce risk and strengthen resilience.",
    capabilities: [
      "Security Assessments",
      "Vulnerability Management",
      "Endpoint Protection",
      "Risk & Security Reviews",
    ],
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Build secure, reliable technology foundations that support connectivity, cloud environments and everyday business operations.",
    capabilities: [
      "Office Networking",
      "Secure Wi-Fi",
      "Structured Cabling",
      "Cloud Infrastructure",
    ],
  },
  {
    icon: Code2,
    title: "Digital Solutions",
    description:
      "Create websites, software and business systems designed to improve operations, visibility and customer experience.",
    capabilities: [
      "Business Websites",
      "Business Systems",
      "POS Solutions",
      "Custom Software",
    ],
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "Modernize operations with automation, improved workflows and practical technologies that support business growth.",
    capabilities: [
      "Process Automation",
      "Workflow Improvement",
      "Digital Strategy",
      "Technology Modernization",
    ],
  },
  {
    icon: Printer,
    title: "Branding & Print",
    description:
      "Strengthen your business identity with professional branding, printed materials and branded merchandise.",
    capabilities: [
      "Business Cards",
      "Signage",
      "Banners",
      "Custom Merchandise",
    ],
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description:
      "Make confident technology decisions with practical guidance aligned with your business priorities and long-term goals.",
    capabilities: [
      "Technology Planning",
      "Security Reviews",
      "Infrastructure Strategy",
      "Digital Advisory",
    ],
  },
];

function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const selected = services[activeService];
  const SelectedIcon = selected.icon;

  return (
    <main className="services-page">

      <section className="services-map-hero">
        <div className="services-page-container">

          <p className="services-page-label">
            ORNEXIS SERVICES
          </p>

          <h1>
            One technology partner.
            <br />
            Multiple capabilities.
          </h1>

          <p className="services-page-intro">
            Explore how ORNEXIS combines security, infrastructure,
            digital solutions, transformation, branding and consulting
            into one connected technology ecosystem.
          </p>

        </div>
      </section>

      <section className="capability-section">
        <div className="services-page-container">

          <div className="capability-layout">

            <div className="capability-map">

              <div className="map-ring map-ring-one" />
              <div className="map-ring map-ring-two" />
              <div className="map-ring map-ring-three" />

              <div className="connector connector-1" />
              <div className="connector connector-2" />
              <div className="connector connector-3" />
              <div className="connector connector-4" />
              <div className="connector connector-5" />
              <div className="connector connector-6" />

              <div className="ornexis-core">
                <div className="core-inner">
                  <span>ORNEXIS</span>
                  <strong>Technology Core</strong>
                </div>
              </div>

              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <button
                    type="button"
                    key={service.title}
                    className={
                      activeService === index
                        ? `capability-node node-${index + 1} active`
                        : `capability-node node-${index + 1}`
                    }
                    onClick={() => setActiveService(index)}
                  >
                    <span className="node-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </span>

                    <span className="node-title">
                      {service.title}
                    </span>
                  </button>
                );
              })}

            </div>

            <aside
              className="capability-details"
              key={activeService}
            >

              <div className="details-top">

                <div className="details-icon">
                  <SelectedIcon
                    size={34}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="details-label">
                    SELECTED CAPABILITY
                  </p>

                  <h2>
                    {selected.title}
                  </h2>
                </div>

              </div>

              <p className="details-description">
                {selected.description}
              </p>

              <div className="details-divider" />

              <p className="details-subtitle">
                WHAT WE DELIVER
              </p>

              <div className="details-capabilities">

                {selected.capabilities.map((item) => (
                  <div
                    className="details-item"
                    key={item}
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={1.8}
                    />

                    <span>
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <a
                href="/#contact"
                className="details-cta"
              >
                Discuss this capability
                <ArrowRight size={18} />
              </a>

            </aside>

          </div>

        </div>
      </section>

    </main>
  );
}

export default ServicesPage;