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

const Nav = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [modal, setModal] = useState(false);
  const { currentQty, setCurrentQty, products } = props;

  return (
    // nav wrap
    <div className="nav">
      <div className="left-nav">
        {/* hamburger */}
        <button
          onClick={() => setIsMobile(!isMobile)}
          style={{
            zIndex: "100",
          }}
        >
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
            <MenuLinks />
          </div>
        </div>
      </div>

      <div className="right-nav">
        {/* cart */}
        <div>
          <button className="cart-wrap" onClick={() => setModal(!modal)}>
            <img src={cart} alt="" className="cart" />
          </button>
          {currentQty > 0 && <div>{currentQty}</div>}
          <div className={modal ? "modal-wrap" : "hide-modal"}>
            {modal && (
              <CartModal
                products={products}
                currentQty={currentQty}
                setCurrentQty={setCurrentQty}
              />
            )}
          </div>
        </div>
        {/* cart */}
        <img src={avatar} alt="" className="avatar" />
      </div>
    </div>
  );
};

export default Nav;
