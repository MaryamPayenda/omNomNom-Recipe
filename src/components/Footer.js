import React from "react";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer__container">
      <h4>Copyrights ®{year} omNomNom Recipe's Website. All Rights Reserved</h4>
    </div>
  );
};

export default Footer;
