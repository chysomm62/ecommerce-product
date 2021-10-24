import React from "react";
import "./nav.js";
import "../../App.css";

import close from "../../images/icon-close.svg";

const MenuLinks = () => {
  return (
    <div className="contain-menu-link">
      <div className="menu-links-wrap">
        <div className="close">
          <img src={close} alt="" className="close" />
        </div>

        <div className="menu-links">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuLinks;
