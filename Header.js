import React, { useState } from "react";
import "../styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Digital Courtroom</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className="nav">
        <ul className={menuOpen ? "open" : ""}>
          <li><a href="/Header">Home</a></li>
          <li><a href="/Login">Login</a></li>
          <li><a href="/Signup">Signup</a></li>
          <li className="dropdown">
            <a href="#">More ▼</a>
            <ul className="dropdown-hidden">
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
