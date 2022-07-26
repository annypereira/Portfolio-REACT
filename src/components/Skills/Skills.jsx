import React from "react";
import style from "./Skills.module.css";
import htmlIcon from "..//assets/html.png";
import ccsIcon from "..//assets/css.png";
import jsIcon from "..//assets/js.png";
import tsIcon from "..//assets/ts.png";
import angularIcon from "..//assets/angular.png";
import reactIcon from "..//assets/react.png";
import gitIcon from "..//assets/git.png";
import englishIcon from "..//assets/english.png";
import spanishIcon from "..//assets/castellano.png";
import translateIcon from "..//assets/translation.png";

const Skills = ({ languages, skills }) => {
  return (
    <>
      <h2 className={style.card_skills}>Habilidades</h2>
      <div className={style.card_container}>
        <div className={style.card_icon}>
          <img src={spanishIcon} alt="spanish" />
          <img src={englishIcon} alt="english" />
          <img src={translateIcon} alt="translate" />
        </div>

        <div className={style.card_languages}>
          <h3>Idiomas</h3>
          {languages.map((item) => {
            return (
              <div key={JSON.stringify(item)}>
                <p>
                  {item.language}: {item.spLevel}
                </p>
              </div>
            );
          })}
        </div>

        <div className={style.card_hard}>
          <h3>Competencias</h3>
          {skills.map((item) => {
            return <p>{item}</p>;
          })}
        </div>

        <div className={style.card_icon}>
          <img src={htmlIcon} alt="html" />
          <img src={ccsIcon} alt="css" />
          <img src={jsIcon} alt="javascript" />
          <img src={tsIcon} alt="typescript" />
          <img src={angularIcon} alt="angular" />
          <img src={reactIcon} alt="react" />
          <img src={gitIcon} alt="git" />
        </div>
      </div>
    </>
  );
};

export default Skills;
