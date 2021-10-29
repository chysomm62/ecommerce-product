import React, { useState } from "react";

import MenuLinks from "./MenuLinks";

// css files
import "../../App.css";
import "./nav.css";

// images and others
import hamburger from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import close from "../../images/icon-close.svg";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    // nav wrap
    <div className="nav">
      <div className="left-nav">
        <button onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <img src={close} alt="" className="close" />
          ) : (
            <img src={hamburger} alt="" className="menu" />
          )}
        </button>
        <img src={logo} alt="logo" className="logo" />
        <div
          className={isMobile ? "links-active" : "contain-menu-link"}
          onClick={() => setIsMobile(false)}
        >
          <div className="menu-links-wrap" onClick={() => setIsMobile(false)}>
            <div className="close">
              <img src={close} alt="" className="close" />
            </div>
            <MenuLinks />
          </div>
        </div>
      </div>

      <div className="right-nav">
        <div className="cart-wrap">
          <img src={cart} alt="" className="cart" />
        </div>
        <img src={avatar} alt="" className="avatar" />
      </div>
    </div>
  );
};

export default Nav;
