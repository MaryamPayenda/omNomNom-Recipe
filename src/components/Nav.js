import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/omNomNom.png";

const Nav = () => {
  return (
    <header className="navBar__container">
      <div className="navLogo">
        <img id="logoImg" src={logo} />
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
