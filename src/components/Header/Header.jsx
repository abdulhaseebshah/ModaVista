import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const navLinks = ["New Arrivals", "Sale", "Brands", "Look Book", "About Us"];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header>
      <div className="leftMenu">
        <div className="toggleMenu" onClick={() => setIsOpen(!isOpen)}>
          <i className="ri-menu-line"></i>
        </div>
        <h2>ModaVista</h2>
        <ul className={`navLinks leftNav ${isOpen ? "active" : ""}`}>
          {navLinks.map((item) => (
            <a href="#">{item}</a>
          ))}
          {isOpen ? "" : <a href="">Account</a>}
        </ul>
      </div>
      <ul className="navLinks rightNav">
        <a href="" id="acBtn">Account</a>
        <a href="#" id="bagBtn">
          Bag <i className="ri-shopping-bag-line" id="bagIcon"></i>
        </a>
      </ul>
    </header>
  );
};

export default Header;
