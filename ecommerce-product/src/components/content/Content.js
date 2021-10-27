import React from "react";

import cart from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";

import "../../App.css";
import "./content.css";

const Content = () => {
  return (
    <div className="c-div">
      <h1 className="c-h1">Sneaker Company</h1>
      <h2 className="c-h2">Fall Limited Edition Sneakers</h2>
      <p className="c-p">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="prices">$125.00 50% $250.00</div>
      <div className="quantity">
        <button>
          <img src={minus} alt="" />
        </button>
        0
        <button>
          <img src={plus} alt="" />
        </button>
      </div>
      <button className="addBtn">
        <img src={cart} alt="" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default Content;
