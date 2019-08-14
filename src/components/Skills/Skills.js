import React from "react";
import "./Skills.css";
import skills from "../../data/skills";

function Skill(props) {
  return (
    <div className="skill-container">
      <img className="tech-icon" src={props.skill.url} alt="icon" />
      <h5>{props.skill.name}</h5>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <div className="section-image-skills" />
      <div id="skills">
        <div >
          <h4>CONFIDENT</h4>
          <div className="skills">
            {skills.confident.map(skill => {
              return <Skill key={skill.id} skill={skill} />;
            })}
          </div>
        </div>
        <div >
          <h4>COMFORTABLE</h4>
          <div className="skills">
            {skills.comfortable.map(skill => {
              return <Skill key={skill.id} skill={skill} />;
            })}
          </div>
        </div>
        <div>
          <h4>DABBLED WITH</h4>
          <div className="skills">
            {skills.dabbledWith.map(skill => {
              return <Skill key={skill.id} skill={skill} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
