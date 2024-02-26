import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [position, setPosition] = useState({
    current: 0,
    prev: 0
  });

  const [vertMenu, setVertMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPosition({ prev: position.current, current: window.scrollY });
      setVertMenu(false);
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
        <img src="./logo.svg" alt="Logo" className="logo" />
        <ul className="horizontal">
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Menu</Link>
          </li>
          <li>
            <Link to="/bookingpage">Reservations</Link>
          </li>
          <li>
            <Link>Order Online</Link>
          </li>
          <li>
            <Link>
              <button>Login</button>
            </Link>
          </li>
        </ul>
        <img
          src="./iconBurgerMenu.svg"
          alt="menu"
          className="verticalBurgerMenu"
          onClick={() => setVertMenu(!vertMenu)}
        />
        <ul
          className="vertical"
          style={vertMenu ? { right: 0 } : { right: -300 }}
        >
          <li>
            <Link to="/" onClick={() => setVertMenu(false)}>Home</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Menu</Link>
          </li>
          <li>
            <Link to="/bookingpage" onClick={() => setVertMenu(false)}>Reservations</Link>
          </li>
          <li>
            <Link>Order Online</Link>
          </li>
          <li>
            <Link>
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </menu>
    </nav>
  );
}

export default Nav;
