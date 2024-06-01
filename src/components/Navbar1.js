import React, { useState } from "react";

import { Link } from "react-router-dom";
// import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar1() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/details"> medicine data </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Category </Link>
        <Link to="/about"> Our Objective </Link>
        <Link to="/contact"> Contact us </Link>
        <Link to="/details"> medicine Data </Link>
        <button onClick={toggleNavbar}>
          {/* <ReorderIc /> */}
        </button>
      </div>
    </div>
  );
}

export default Navbar1;