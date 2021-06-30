import React, { useState } from "react";
import NavLinks from "./NavLinks";

import { FaTimes, FaBars } from "react-icons/fa";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <FaBars className="Humberger" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <FaTimes className="Humberger" onClick={() => setOpen(!open)} />
  );

  return (
    <nav className="MobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
};

export default MobileNavigation;
