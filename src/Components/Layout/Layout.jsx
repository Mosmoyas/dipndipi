import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../index";


const Layout = (props) => {


  return (
    <>
      <Navbar />

      <Outlet></Outlet>
      {/* <Footer /> */}
    </>
  );
};
export default Layout