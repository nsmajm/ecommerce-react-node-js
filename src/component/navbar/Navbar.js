import React from "react";
import TopMenu from "./TopMenu";
import MiddleMenu from "./MiddleMenu";
import MainMenu from "./MainMenu";

const Navbar = () => {
  return (
    <div>
      <TopMenu></TopMenu>
      <MiddleMenu></MiddleMenu>
      <MainMenu></MainMenu>
    </div>
  );
};

export default Navbar;
