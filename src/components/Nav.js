import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navBar__container">
      <div className="navLogo"></div>
      <div className="navBar">
        <ul>
          <Link to="/">
            <li>HOMEPAGE</li>
          </Link>
          <Link to="/Recipe">
            <li>RECIPES</li>
          </Link>
          <Link to="/About">
            <li>ABOUT US</li>
          </Link>
          <Link to="/Contact">
            <li>CONTACT US</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
