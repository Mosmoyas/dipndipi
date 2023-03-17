import { Link } from "react-router-dom";
import './mynav.css';
import React, { useState } from "react";

import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/images/main/Dipndip_logo.png'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md bg text-white">
                <Link href="#" className="navbar-brand fs-3 ms-3">
                    <img src={logo} alt="" />
                </Link>
                <button
                    type="button"
                    className="navbar-toggler me-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#btn"
                >
                    icon
                </button>
                <div className="collaps navbar-collapse" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="#" className="nav-link mx-3">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#" className="nav-link mx-3">
                                About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#" className="nav-link mx-3">
                                Service
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#" className="nav-link mx-3">
                                News
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link href="#" className="nav-link mx-3">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
