import React from "react";
import "../styles/ProjectItem.css";

// Example props; adjust as needed
interface ProjectItemProps {
  projectNumber: string; // e.g., "01"
  title: string; // e.g., "Electric car-sharing system"
  description: string; // e.g., your project overview text
  imageSrc: string; // path or URL to the image (like the "GO" graphic)
  repoLink: string; // link to GitHub or other repo
  repoText: string; // text to display for the link (e.g., "RotiCharoti/CharlotteCarSharingSystem")
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  projectNumber,
  title,
  description,
  imageSrc,
  repoLink,
  repoText,
}) => {
  return (
    <section className="project-item">
      {/* Left side: Image or large text graphic */}
      <div className="project-image-container">
        <img src={imageSrc} alt={title} className="project-image" />
      </div>

      {/* Right side: Text */}
      <div className="project-text">
        <h2 className="project-number">{projectNumber}</h2>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <p className="project-repo">
          Link to project:{" "}
          <a href={repoLink} target="_blank" rel="noreferrer">
            {repoText}
          </a>
        </p>
      </div>
    </section>
  );
};

export default ProjectItem;
