import React from "react";
import style from "./Experience.module.css";

const Experience = ({ experience }) => {
  return (
    <div className={style.card_experience}>
      <h2 className={style.lines_effect}>Experiencia</h2>
      <div>
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)} className={style.card_experience_item}>
              <p className={style.name}>{item.name}</p>
              <p className={style.date}>{item.date}</p>
              <p className={style.where}>{item.where}</p>
              <p className={style.description}>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;