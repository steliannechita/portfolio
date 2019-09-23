import React from "react";
import PROJECTS from "../../data/projects";
import "./Projects.css";

function Project(props) {
  const { title, image, description, link, sourceCode } = props.project;
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt="profile" />
      <p>{description}</p>
      <div className="links-container">
        <a target="_blank" rel="noopener noreferrer" href={link}>
          Demo
        </a>
        <a target="_blank" rel="noopener noreferrer" href={sourceCode}>
          Code
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <div id="projects">
        <div className="projects-container">
          <h2>PROJECTS</h2>
          {PROJECTS.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
