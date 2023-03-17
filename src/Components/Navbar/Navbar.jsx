import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/images/main/Dipndip_logo.png';

const Navbar = () => {


  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-md bg text-white">
      <Link to="/" className="navbar-brand fs-3 ms-3">
        <img className="logoimage" src={logo} alt="" />
      </Link>
      {isMobile && (
        <button
          type="button"
          className="navbar-toggler me-3"
          onClick={handleToggle}
        >
          {isNavOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      )}
      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""} `}
        id="btn"
      >
        <ul className="navbar-nav flxgr  ">

          <li className="nvli nav-item ">
            <Link to="/food" className="nav-link mx-0">
              Food
            </Link>
          </li>
          <li className="nvli nav-item ">

            <Link to="/drinks" className="nav-link mx-0">
              Drinks
            </Link>
          </li>
          <li className="nvli nav-item ">

            <Link to="/chocolate" className="nav-link mx-0">
              Chocolate
            </Link>
          </li>
          <li className="nvli nav-item ">

            <Link to="/shisha" className="nav-link mx-0">
              Shisha
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
