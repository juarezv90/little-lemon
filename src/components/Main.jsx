import React from "react";
import Menu from "./Menu";
import Testimonies from "./Testimonies";
import About from "./About";

function Main() {
  return (
    <>
      <div className="mainContainer">
        <Menu />
        <Testimonies />
        <About />
      </div>
    </>
  );
}

export default Main;
