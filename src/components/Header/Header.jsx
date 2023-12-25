import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = ["New Arrivals", "Sale", "Brands", "Look Book", "About Us"];
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header>
      <div className="leftMenu">
        <div className="toggleMenu" onClick={() => setIsOpen(!isOpen)}>
          <i className="ri-menu-line"></i>
        </div>
        <h2><Link to="/">ModaVista</Link></h2>
        <ul className={`navLinks leftNav ${isOpen ? "active" : ""}`}>
          {navLinks.map((item, index) => (
            <Link to="/" key={index}>{item}</Link>
          ))}
          {isOpen ? "" : <Link to="/account/login">Account</Link>}
        </ul>
      </div>
      <ul className="navLinks rightNav">
        <Link to="/account/login"  id="acBtn">Account</Link>
        <Link to="/cart" id="bagBtn">
          Bag <i className="ri-shopping-bag-line" id="bagIcon"></i>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
