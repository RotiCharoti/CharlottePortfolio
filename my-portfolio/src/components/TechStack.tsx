import React from "react";
import "../styles/TechStack.css";
import logo1 from "../assets/MSSQL.jpg";
import logo2 from "../assets/HTML.jpg";
import logo3 from "../assets/Javascript.jpg";
import logo4 from "../assets/MySQL.png";
import logo5 from "../assets/React.webp";
import logo6 from "../assets/Node.webp";
import logo7 from "../assets/Express.png";
import logo8 from "../assets/AWS.jpg";

const TechStack: React.FC = () => {
  // List of images
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  // Duplicate the array so we can create a seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <>
    <br></br>
      <p className="tech-stack-title">Technical Stack</p>
      <div className="carousel">
        <div className="slide-track">
          {repeatedLogos.map((logo, idx) => (
            <div className="slide" key={idx}>
              <img src={logo} alt={`Logo ${idx}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
