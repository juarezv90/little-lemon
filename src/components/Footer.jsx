import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <img src="./logo1.svg" alt="logo" />
        <ul>
          <h2>Doormat Navigation</h2>
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
        <ul>
          <h2>Contact</h2>
          <li>address</li>
          <li>phone</li>
          <li>email</li>
        </ul>
        <ul>
          <h2>Social Media</h2>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
