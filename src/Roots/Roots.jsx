import React from "react";
import Navbar from "../Component/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Component/Footer";
import Loading from "../Component/Loading";

const Roots = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      {navigation?.state === "loading" ? <Loading /> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Roots;
