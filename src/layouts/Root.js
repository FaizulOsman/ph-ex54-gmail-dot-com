import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <div className="w-2/12">
          <NavBar></NavBar>
        </div>
        <div className="w-10/12">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
