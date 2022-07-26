import React from "react";
import style from "./Education.module.css";

const Education = ({ education }) => {
  return (
    <div className={style.card_education}>
      <h2 className={style.lines_effect}>Educación</h2>
      <div>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className={style.card_education_item}>
              <p className={style.name}>{item.name}</p>
              <p className={style.date}>Finalizado en {item.date}</p>
              <p className={style.where}>{item.where}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
