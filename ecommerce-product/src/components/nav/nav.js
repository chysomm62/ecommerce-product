import React from "react";

import MenuLinks from "./MenuLinks";

// css files
import "../../App.css";
import "./nav.css";

// images and others
import hamburger from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";

const Nav = () => {
  return (
    // nav wrap
    <div className="nav">
      <div className="left-nav">
        <img src={hamburger} alt="" className="menu" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      {/* <MenuLinks /> */}

      <div className="right-nav">
        <img src={cart} alt="" className="cart" />
        <img src={avatar} alt="" className="avatar" />
      </div>
    </div>
  );
};

export default Nav;
