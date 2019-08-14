import React, { Component } from "react";
import PROJECTS from "../../data/projects";
import "./Projects.css";

function Project(props) {
  const { id, title, image, description, link, sourceCode } = props.project;
  return (
    <div className="project">
      <h2>PROJECT {id}</h2>
      <h3>{title}</h3>
      <img
        src={image}
        alt="profile"
        
      />
      <p>{description}</p>
      <div className="links-container">
        <a target="_blank" href={link}>
          Demo
        </a>
        <a target="_blank" href={sourceCode}>
          Code
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <div className="section-image-projects" />
      <div id="projects">
        <div className="projects-container">
          {PROJECTS.map(project => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
