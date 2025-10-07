import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Footer";

const Roots = () => {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
