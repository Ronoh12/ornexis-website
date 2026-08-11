import {
  CalendarDays,
  FileText,
  ArrowRight,
} from "lucide-react";

import "../styles/FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta-container">

        <div className="final-cta-panel">

          <p className="section-tag">
            READY TO MOVE FORWARD?
          </p>

          <h2>
            Build a stronger technology
            <br />
            foundation for your business.
          </h2>

          <p className="final-cta-text">
            Whether you need cybersecurity, infrastructure, managed IT,
            cloud, digital solutions or professional branding, ORNEXIS is
            ready to help you take the next step.
          </p>

          <div className="final-cta-buttons">

            <a
              href="mailto:info@ornexis.com"
              className="final-cta-primary"
            >
              <CalendarDays size={19} />
              <span>Schedule a Consultation</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="mailto:info@ornexis.com?subject=ORNEXIS%20Quote%20Request"
              className="final-cta-secondary"
            >
              <FileText size={19} />
              <span>Request a Quote</span>
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCTA;