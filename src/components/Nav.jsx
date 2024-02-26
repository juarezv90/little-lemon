import React, { useEffect, useState } from "react";

function Nav() {
  const [position, setPosition] = useState({
    current: 0,
    prev: 0
  });

  const [vertMenu, setVertMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ prev: position.current, current: window.scrollY });
      setVertMenu(false)
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
        <img src="./logo.svg" alt="Logo" className="logo"/>
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
        <img src="./iconBurgerMenu.svg" alt="menu" className="verticalBurgerMenu" onClick={() => setVertMenu(!vertMenu)}/>
        <ul className="vertical" style={vertMenu ? {right:0}:{right:-300}}>
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
