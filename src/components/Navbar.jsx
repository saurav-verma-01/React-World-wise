import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 px-8 bg-cyan-500">
      <ul className="flex gap-4 justify-end">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/product">PRODUCT</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">PRICING</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
