import React from "react";
import "./Header.scss";

const Header = () => {
  const navLinks = ["New Arrivals", "Sale", "Brands", "Look Book", "About Us"];
  return (
    <header>
      <div className="leftMenu">
      <i class="ri-menu-line toggleMenu"></i>
        <h2>ModaVista</h2>
        <ul className="navLinks leftNav">
          {navLinks.map((item) => (
            <a href="#">{item}</a>
          ))}
        </ul>
      </div>
      <ul className="navLinks rightNav">
        <a href="#" id="bagBtn">Bag <i className="ri-shopping-bag-line" id="bagIcon"></i></a>
      </ul>
    </header>
  );
};

export default Header;
