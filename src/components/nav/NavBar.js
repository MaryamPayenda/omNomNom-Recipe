import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="NavBar">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/img/omNomNom.png`} />
        </div>

        <Navigation />
        <MobileNavigation />
      </div>
      <hr />
    </div>
  );
};
export default NavBar;
