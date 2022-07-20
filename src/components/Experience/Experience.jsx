import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
    <h2>Experiencia</h2>
      <div className="education-card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>{item.date}</p>
              <p>{item.where}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;