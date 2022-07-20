import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    // <Router>
      <nav>
      <ul>
        <li>
          <Link to="/Home">Inicio</Link>
        </li>
        <li>
          <Link to="/About">Sobre mi</Link>
        </li>
        <li>
          <Link to="/Experience">Experiencia</Link>
        </li>
        <li>
          <Link to="/Education">Estudios</Link>
        </li>
        <li>
          <Link to="/Skills">Habilidades</Link>
        </li>
      </ul>
    </nav> 
    // </Router>
  );
};

export default NavBar;
