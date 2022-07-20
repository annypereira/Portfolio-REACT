import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (

  <nav>
  <ul>
    <li>
      <Link to="">Inicio</Link>
    </li>
    <li>
      <Link to="/about">Sobre mi</Link>
    </li>
    <li>
      <Link to="/experience">Experiencia</Link>
    </li>
    <li>
      <Link to="/education">Estudios</Link>
    </li>
    <li>
      <Link to="/skills">Habilidades</Link>
    </li>
  </ul>
  </nav> 

  )
};

export default NavBar;
