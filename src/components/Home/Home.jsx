import React from "react";
import "./Home.css";

// const NavBar = (props) => {
//     return (
//     <div>
//         <ul>
//             <li>
//                 <a href="#home">Inicio</a>
//             </li>
//             <li>
//                 <a href="#aboutMe">Sobre mi</a>
//             </li>
//             <li>
//                 <a href="#experience_education">Experiencia y estudios</a>
//             </li>
//             <li>
//                 <a href="#contactMe">Contáctame</a>
//             </li>
//         </ul>
//     </div>)

// };

const Home = ({ home }) => {
  return (
    <div className="home">
      <img src="{home.image}" alt="" />
      <div className="card">
        <h2>
            {home.name} {home.lastname}
        </h2>
        <p>{home.adress} {home.zipCode}</p>
        <p>{home.mail}</p>
        <p>{home.phone}</p>
      </div>
      <h3>Anny Pereira Sánchez</h3>
    </div>
  );
};

export default Home;
