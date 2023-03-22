import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/images/main/Dipndip_logo.png";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className="main">
      {
        i18n.language === "en" ? (
          <div className="english">
            <Link to="/" className="logo ">
              <img className="logoimage" src={logo} alt="" />
            </Link>
            <div className="langs arb">

              <Link to="/" onClick={() => i18n.changeLanguage("ar")}
              >عربي</Link>
            </div>
            {isMobile && (
              <div className="navbar-column">
                <div
                  className={`navbar-items-column  ${isNavOpen ? "show" : ""} `}
                  id="btn">
                  <ul className="ulist">
                    <li className=" ">
                      <Link to="/fooden" className="categoryLink">
                        {t("food")}
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to="/drinksen" className="categoryLink">
                        {t("drinks")}
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to="/chocolateen" className="categoryLink">
                        {t("chocolate")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/shishaen" className="categoryLink">
                        {t("shisha")}
                      </Link>
                    </li>
                    <li
                      className="btn-lang"
                      onClick={() => i18n.changeLanguage("ar")}
                    >
                      <Link to="/" className="categoryLink">
                        عربي
                      </Link>
                    </li>
                  </ul>
                </div><button
                  type="button"
                  className="btn-icon en"
                  onClick={toggleNav}
                >
                  {isNavOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>



              </div>
            )}

            <div
              className={`navbar-items`}
              id="btn"
            >
              <ul className="ulist">
                <li className=" ">
                  <Link to="/fooden" className="categoryLink">
                    {t("food")}
                  </Link>
                </li>
                <li className=" ">
                  <Link to="/drinksen" className="categoryLink">
                    {t("drinks")}
                  </Link>
                </li>
                <li className=" ">
                  <Link to="/chocolateen" className="categoryLink">
                    {t("chocolate")}
                  </Link>
                </li>
                <li className="">
                  <Link to="/shishaen" className="categoryLink">
                    {t("shisha")}
                  </Link>
                </li>
                <li
                  className="btn-lang"
                  onClick={() => i18n.changeLanguage("ar")}
                >
                  <Link to="/" className="categoryLink">
                    عربي
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="arabic">
            <Link to="/" className="logo ">
              <img className="logoimage" src={logo} alt="" />
            </Link>
            <div className="langs eng">
              <Link to="/" onClick={() => i18n.changeLanguage("en")}
              >English</Link>

            </div>
            {isMobile && (
              <div className="navbar-column">
                <div
                  className={`navbar-items-column  ${isNavOpen ? "show" : ""} `}
                  id="btn"
                >
                  <ul className="ulist">
                    <li className=" ">
                      <Link to="/foodar" className="categoryLink">
                        {t("food")}
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to="/drinksar" className="categoryLink">
                        {t("drinks")}
                      </Link>
                    </li>
                    <li className=" ">
                      <Link to="/chocolatear" className="categoryLink">
                        {t("chocolate")}
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/shishaar" className="categoryLink">
                        {t("shisha")}
                      </Link>
                    </li>
                    <li
                      className="btn-lang"
                      onClick={() => i18n.changeLanguage("ar")}
                    >
                      <Link to="/" className="categoryLink">
                        English
                      </Link>
                    </li>
                  </ul>
                </div><button
                  type="button"
                  className="btn-icon ar"
                  onClick={toggleNav}
                >
                  {isNavOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>



              </div>
            )}

            <div
              className={`navbar-items`}
              id="btn"
            >
              <ul className="ulist">
                <li className=" ">
                  <Link to="/foodar" className="categoryLink">
                    {t("food")}
                  </Link>
                </li>
                <li className=" ">
                  <Link to="/drinksar" className="categoryLink">
                    {t("drinks")}
                  </Link>
                </li>
                <li className=" ">
                  <Link to="/chocolatear" className="categoryLink">
                    {t("chocolate")}
                  </Link>
                </li>
                <li className="">
                  <Link to="/shishaar" className="categoryLink">
                    {t("shisha")}
                  </Link>
                </li>
                <li
                  className="btn-lang"
                  onClick={() => i18n.changeLanguage("en")}
                >
                  <Link to="/" className="categoryLink">
                    English
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    </nav>
  );
};

export default Navbar;




