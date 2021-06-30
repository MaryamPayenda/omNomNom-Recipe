import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <ul>
         

            
          <li>

            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>

          <li>
           
            <Link to="/about">ABOUT US</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
