import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="left">
          <h1>Little Lemon</h1>
          <span style={{fontSize:"32px", fontWeight:"bold"}}>Chicago</span>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="right">
          <img src="./restaurant.jpg" alt="" width={100} height={100} loading="lazy"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
