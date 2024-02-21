import React, { useEffect, useState } from "react";
import "./Nav.scss";

function Nav() {
  const [position, setPosition] = useState({
    current: 0,
    prev: 0
  });

  useEffect(() => {
    const handleScroll = () => {
        // setPosition({prev: position.current, current: window.scrollY})
    }

    window.addEventListener('scroll', handleScroll)

    return (()=> {
      window.removeEventListener('scroll', handleScroll)
    })
  }, [position.current]);

  return (
    <nav style={position.prev < position.current ? {top: -123} : {top:0}}>
      <div>
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
          <button>
            <li>Login</li>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
