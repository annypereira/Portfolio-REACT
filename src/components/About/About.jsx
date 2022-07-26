import React from "react";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.card_about}>
      <h2 className={style.lines_effect}>Te cuento sobre mí </h2>
      <p>
        Soy una profesional proactiva, con experiencia en atención al cliente,
        gestión de equipos y habilidades sociales para el correcto desarrollo
        laboral diario, con ganas de afrontar nuevos proyectos y aprender nuevas
        habilidades.
      </p>
      <p>
        Luego de haber aprendido muchas habilidades en mis antiguas experiencias
        laborales he decidido dar un giro profesional y actualmente soy
        desarrolladora FRONT-END, tengo muchas ganas de trabajar en proyectos
        donde ponga en práctica las habilidades adquiridas en mi última
        formación y sin duda seguir formándome en este maravilloso mundo que
        está en constante actualización.
      </p>
    </div>
  );
};

export default About;
