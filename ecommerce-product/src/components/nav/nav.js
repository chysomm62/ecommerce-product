import React, { useState } from "react";
import CartModal from "../modals/CartModal";
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
  const [modal, setModal] = useState(false);
  return (
    // nav wrap
    <div className="nav">
      <div className="left-nav">
        {/* hamburger */}
        <button onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <img src={close} alt="" className="close" />
          ) : (
            <img src={hamburger} alt="" className="menu" />
          )}
        </button>
        {/* end of hamburger */}
        <img src={logo} alt="logo" className="logo" />
        <div
          className={isMobile ? "links-active" : "contain-menu-link"}
          onClick={() => setIsMobile(false)}
        >
          {/* menu links */}
          <div className="menu-links-wrap" onClick={() => setIsMobile(false)}>
            <div className="close">
              <img src={close} alt="" className="close" />
            </div>
            <MenuLinks />
          </div>
        </div>
      </div>

      <div className="right-nav">
        {/* cart */}
        <button className="cart-wrap" onClick={() => setModal(!modal)}>
          <img src={cart} alt="" className="cart" />
        </button>
        {/* cart */}
        <img src={avatar} alt="" className="avatar" />
      </div>
      <div className={modal ? "modal-wrap" : "hide-modal"}>
        <CartModal />
      </div>
    </div>
  );
};

export default Nav;
