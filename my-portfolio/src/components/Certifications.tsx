import React from "react";
import "../styles/Certification.css";
// If your certificate image is in `src/assets`, you can import it:
import psmCertificate from "../assets/PSM_Cert.avif";
import awsCertificate from "../assets/AWS_CCP.avif";

const Certifications: React.FC = () => {
  return (
    <section id="certification" className="certification-section">
      <p className="certification-title">Certifications</p>
      <div className="certification-cards">
        {/* Scrum Certification */}
        <div className="certification-card">
          <h3 className="certification-name">PSM1 Scrum Certification</h3>
          <div className="certification-image-container">
            <img
              src={psmCertificate}
              alt="PSM1 Scrum Certification"
              className="certification-image"
            />
          </div>
        </div>
        {/* AWS Certification */}
        <div className="certification-card">
          <h3 className="certification-name">
            AWS Certified Cloud Practitioner
          </h3>
          <div className="certification-image-container">
            <img
              src={awsCertificate}
              alt="AWS Certified Cloud Practitioner"
              className="certification-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
