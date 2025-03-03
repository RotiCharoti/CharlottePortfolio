import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Logo/Name Section */}
      <div className="header-left">
        <h1 className="logo-text">Charlotte Lim</h1>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#techstack">Tech Stack</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
