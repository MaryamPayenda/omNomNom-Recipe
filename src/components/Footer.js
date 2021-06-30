import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer__container">
      <p>OmNomNom Foods & Recipes</p>
      <h4>All Rights Reserved</h4>
      <p>Copyrights ®{year}</p>
    </div>
  );
};

export default Footer;
