import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <h2>Educación</h2>
      <div className="education-card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.name}</p>
              <p>Finalizado en {item.date}</p>
              <p>{item.where}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
