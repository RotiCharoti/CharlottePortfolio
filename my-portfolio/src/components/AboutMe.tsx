import React from "react";
import "../styles/AboutMe.css";
import profilePic from "../assets/profile.jpg";
import githubLogo from "../assets/GitHub.png";
import linkedinLogo from "../assets/Linkedin_logo.webp";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side: Profile Image */}
        <div className="about-left">
          <img src={profilePic} alt="Charlotte" className="about-image" />
        </div>

        {/* Right Side: Text Content */}
        <div className="about-right">
          <h2 className="about-greeting">Hello!</h2>
          <h3 className="about-name">I'm Charlotte</h3>
          <p className="about-description">
            An Information Technology student with a specialization in Cloud
            Computing. With a passion for web and cloud development, I strive to
            create impactful solutions that tackle real-world challenges.
          </p>

          {/* Social Logos */}
          <div className="about-social">
            <a
              href="https://github.com/RotiCharoti"
              target="_blank"
              rel="noreferrer"
              className="social-logo-container"
            >
              <img src={githubLogo} alt="GitHub" className="social-logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/charlotte-lim-info"
              target="_blank"
              rel="noreferrer"
              className="social-logo-container"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="social-logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
