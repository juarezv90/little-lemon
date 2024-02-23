import React, { useEffect, useState } from "react";

function Nav() {
  const [position, setPosition] = useState({
    current: 0,
    prev: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ prev: position.current, current: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  return (
    <nav
      style={
        position.prev < position.current && position.current > 123
          ? { top: -123 }
          : { top: 0 }
      }
    >
      <menu>
        <img src="./logo.svg" alt="Logo" />
        <ul className="horizontal">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>
            <button>Login</button>
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default Nav;
