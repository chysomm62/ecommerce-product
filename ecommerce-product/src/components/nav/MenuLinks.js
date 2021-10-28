import React from "react";

import { Link } from "react-router-dom";

import "./nav.css";
import "../../App.css";

const MenuLinks = () => {
  return (
    <div className="menu-links">
      <ul>
        <li>
          <Link to="/">Collections</Link>
        </li>
        <li>
          <Link to="/Men">Men</Link>
        </li>
        <li>
          <Link to="/">Women</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuLinks;
