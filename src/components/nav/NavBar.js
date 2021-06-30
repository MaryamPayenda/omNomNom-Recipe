import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="NavBar">
        <Link to="/">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}/img/omNomNom.png`} />
          </div>
        </Link>
        {/* <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/img/omNomNom.png`} />
        </div> */}
        <div className="links">
          {" "}
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};
export default NavBar;
