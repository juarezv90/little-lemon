import React from "react";

function Nav() {
  return (
    <nav>
      <img src="./logo.svg" alt="Logo" />
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/">
          <li>About</li>
        </a>
        <a href="/">
          <li>Menu</li>
        </a>
        <a href="/">
          <li>Reservations</li>
        </a>
        <a href="/">
          <li>Order Online</li>
        </a>
        <a href="/">
          <li>Login</li>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
