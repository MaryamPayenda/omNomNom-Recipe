import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/mNomNom.png";

const Nav = () => {
  return (
    <header>
      <div className="navBar__container">
        <div className="navLogo">
          <Link to="/">


            <li>
              <img id="logoImg" src={logo} />
            </li>
          </Link>{" "}
        </div>
        <div className="navBar">
          <nav>
            <Link to="/">
              <li>HOMEPAGE</li>
            </Link>
<Link to="/categories">
            <li>CATEGORIES</li>
          </Link>
            
            <Link to="/about">
              <li>ABOUT US</li>
            </Link>
          </nav>{" "}
        </div>


      </div>
    </header>
  );
};

export default Nav;
