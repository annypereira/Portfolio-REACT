import React from "react";
import style from "./Home.module.css";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";

const Home = ({ home }) => {
  return (
    <div className={style.home_page}>
      <img className={style.card_img} src={home.image} alt="cvImg" />
      <div className={style.card_home}>
        <h2>
        {home.name} {home.lastname}
        </h2>
        <div className={style.card_contact}>
          <p> <img className={style.card_icon} src={mailIcon} alt="mail"/> {home.mail}</p>
          <p> <img className={style.card_icon}src={phoneIcon} alt="phone"/> {home.phone}</p>
        </div>
        <div className={style.card_social}>
          <a
            href={home.gitHub}
            target="_blank"
            rel="noreferrer"
          >
          <img className={style.card_icon} src={githubIcon} alt="github"></img>
          </a>
          <a
            href={home.linkedin}
            target="_blank"
            rel="noreferrer"
          >
          <img className={style.card_icon} src={linkedinIcon} alt="linkedin"></img>         
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
