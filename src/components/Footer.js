import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer__container">
      <p>OmNomNom Foods & Recipes</p>
      <h4>All Rights Reserved</h4>
      <h5>Copyrights ®{year}</h5>
    </div>
  );
};

export default Footer;
