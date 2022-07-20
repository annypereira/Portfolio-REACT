import React from "react";
import "./Skills.css";

const Skills = ({ languages, skills }) => {
  return (
    <>
      <h2>Habilidades</h2>
      <div className="language-card">
      <h3>Idiomas</h3>
        {languages.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.language}</p>
              <p>{item.wrLevel}</p>
              <p>{item.spLevel}</p>
            </div>
          );
        })}
      </div>
      <div className="skills-card">
      <h3>Competencias</h3>
        { skills.map((item) => {
            return <p>{item}</p>
        })}
      </div>
    </>
  );
};

export default Skills;
