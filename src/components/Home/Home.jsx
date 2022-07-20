import React from "react";
import "./Home.css";

const Home = ({ home }) => {
  return (
    <div className="home">
      <img src="{home.image}" alt="" />
      <div className="card">
        <h2>
          Hola, soy {home.name} {home.lastname}
        </h2>
        <p>
          {home.adress} {home.zipCode}
        </p>
        <p>{home.mail}</p>
        <p>{home.phone}</p>
        <p>{home.gitHub}</p>
        <p>{home.linkedin}</p>
      </div>
    </div>
  );
};

export default Home;
