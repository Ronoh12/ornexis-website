import {
  ShieldCheck,
  Cloud,
  Headphones,
  Network,
  DatabaseBackup,
  Workflow,
} from "lucide-react";

import "../styles/Services.css";

const services = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Services",
    description:
      "Protect your systems, data and users through security assessments, endpoint protection and practical risk management.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Move, manage and protect your business workloads using secure and scalable cloud technologies.",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    description:
      "Reliable remote and on-site support that keeps your computers, users and business systems running smoothly.",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Professional network design, secure Wi-Fi, structured cabling, VPNs and dependable connectivity solutions.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Recovery",
    description:
      "Protect critical information with automated backups, disaster recovery planning and business continuity support.",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "Improve productivity through business automation, modern software, websites and technology consulting.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-heading">
        <p className="section-label">OUR SERVICES</p>

        <h2>Secure technology solutions built for business growth.</h2>

        <p>
          From cybersecurity and managed support to cloud and networking,
          ORNEXIS provides practical technology solutions for modern
          organizations.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon size={28} strokeWidth={1.8} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">Learn more →</a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;