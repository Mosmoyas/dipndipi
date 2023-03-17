import React, { useState } from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/images/main/Dipndip_logo.png'
const Navbar = () => {
  const Menu = () => (
    <>
      <p>
        <Link to="/food">Food</Link>
      </p>
      <p>
        <Link to="/drinks">Drinks</Link>
      </p>
      <p>
        <Link to="/chocolate">Chocolate</Link>
      </p>
      <p>
        <Link to="/shisha">Shisha</Link>
      </p>
      {/* <p>
        <Link to="/about">About</Link>
      </p> */}
    </>
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="dipndip__navbar">
      <div className="dipndip__navbar-links">
        <div className="dipndip__navbar-links_logo">
          <Link className="dipndip__navbar-links_logo-link" to="/"><img src={logo} alt="Dipndip_logo" /> </Link>
        </div>
        <div className="dipndip__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="dipndip__navbar-menu">
        {toggleMenu ? 
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
         : 
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        }

        {toggleMenu && (
          <div className="dipndip__navbar-menu_container scale-up-center ">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
