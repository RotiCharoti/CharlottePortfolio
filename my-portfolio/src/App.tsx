import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./Project"; // Changed from Project to Projects (match file structure)
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications"; // Fixed name to match file structure
import Contact from "./components/Contact";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="techstack">
          <TechStack />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
