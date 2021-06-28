import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="navBar__container">
      <div className="navLogo">
        <img src="./img/omNomNom.png"></img>
      </div>
      <div className="navBar">
        <nav>
          <Link to="/">
            <li>HOMEPAGE</li>
          </Link>
          <Link to="/Recipe">
            <li>RECIPES</li>
          </Link>
          <Link to="/About">
            <li>ABOUT US</li>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
