// In another file (e.g., Projects.tsx):
import React from "react";
import ProjectItem from "./components/ProjectItem";
import goLogo from "./assets/go_logo.avif";
import suaveLogo from "./assets/Suave.png";
import mmNewsLogo from "./assets/MM_News.png";
import timelessMarketLogo from "./assets/TimelessMarket.png";
import vitaSyncLogo from "./assets/VitaSync.png";
import "./styles/Project.css";

const Projects: React.FC = () => {
  return (
    <div>
      <br></br>

      <ProjectItem
        projectNumber="01"
        title="Suave - Cloud-based WebServer Ad Distribution"
        description="This project empowers users to efficiently manage, distribute, and control advertisements displayed on televisions. Its web server enables the customization of advertisements, allowing users to push content to TVs and organize them into various segments."
        imageSrc={suaveLogo}
        repoLink="https://github.com/RotiCharoti/Suave"
        repoText="Suave"
      />

      <br></br>
      <br></br>
      <p className="section-title">Frontend Projects</p>
      <ProjectItem
        projectNumber="02"
        title="MM News - Marilyn Monroe Biography Website"
        description="This website is a biography of Marilyn Monroe, offering an engaging overview of her life and career. It covers her rise to fame, the challenges she faced despite her iconic status, and her enduring influence. The site also includes interesting facts and an interactive quiz, making it a great starting point for anyone looking to learn more about the legendary actress."
        imageSrc={mmNewsLogo}
        repoLink="https://github.com/RotiCharoti/Assignment1"
        repoText="MM News"
      />
      <a
        href="https://roticharoti.github.io/Assignment1/"
        target="_blank"
        rel="noreferrer"
        className="project-deploy-btn"
      >
        Visit Website
      </a>

      <br></br>

      <ProjectItem
        projectNumber="03"
        title="Timeless Market - E-Commerce Website"
        description="Timeless Market is a platform dedicated to showcasing enduring local businesses in Singapore. It features detailed reviews of shops across categories such as fashion, hobbies, art, thrift stores, food, and jewelry, allowing users to experience these products through our eyes. Additionally, the site encourages community engagement by offering a comment section for feedback and a dedicated page for reporting issues or suggesting improvements."
        imageSrc={timelessMarketLogo}
        repoLink="https://github.com/RotiCharoti/FED_Grp77Website"
        repoText="Timeless Market"
      />
      <a
        href="https://roticharoti.github.io/FED_Grp77Website/"
        target="_blank"
        rel="noreferrer"
        className="project-deploy-btn"
      >
        Visit Website
      </a>

      <br></br>
      <br></br>
      <p className="section-title">Backend Projects</p>

      <ProjectItem
        projectNumber="04"
        title="Electric Car-Sharing System (Revamping)"
        description="This project is a fully functional electric car-sharing system, designed to be efficient, scalable, and user-friendly. It consists of three distinct microservices, each handling specific aspects of the system: User Service, Vehicle Service, and Billing Service. These services communicate seamlessly through RESTful APIs, enabling a cohesive experience for users while maintaining modularity for future scalability and maintenance."
        imageSrc={goLogo}
        repoLink="https://github.com/RotiCharoti/Charlotte_CarSharingSystem"
        repoText="Electric Car-Sharing System"
      />

      <br></br>
      <br></br>
      <p className="section-title">Design Projects</p>
      <ProjectItem
        projectNumber="05"
        title="VitaSync - Telehealth Mobile Application"
        description="VitaSync is a telemedicine app designed for Singapore’s private healthcare sector. Originally developed to address COVID-19 challenges like overcrowding and staff shortages, it now offers virtual consultations, medication delivery, appointment scheduling, and health record integration to improve traditional healthcare systems. Its integration with smartwatches and preventive care features also aligns with initiatives such as Healthier SG, making it a future-ready solution for enhancing health outcomes and reducing pressure on physical clinics and hospitals."
        imageSrc={vitaSyncLogo}
        repoLink="https://www.figma.com/design/ZbF97cVnbxp2TB8Ouw9P8p/Charlotte_DUX_ASG1_Part2_MobileApp-(Copy)?t=1ze7ZI8PNXmoYzIi-1"
        repoText="VitaSync"
      />

      <div className="project-buttons">
        <a
          href="https://www.figma.com/proto/2Do3Oqkf7D6CHzD2Gqm5h3/Charlotte_DUX_ASG1_Part2_MobileApp?node-id=1-284&t=XD1Y5zuj595LLhV1-1"
          target="_blank"
          rel="noreferrer"
          className="project-deploy-btn"
        >
          View Figma
        </a>
        <a
          href="https://www.canva.com/design/DAGX48z_xV4/2wGiwSFmbyFXjRpvfYaYbw/view?utm_content=DAGX48z_xV4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h92de6b5b3a"
          target="_blank"
          rel="noreferrer"
          className="project-deploy-btn"
        >
          View Application Proposal
        </a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Projects;
