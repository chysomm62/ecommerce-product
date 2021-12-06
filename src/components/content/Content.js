import React, { useState } from "react";
import cart from "../../images/icon-cart.svg";
import minus from "../../images/icon-minus.svg";
import plus from "../../images/icon-plus.svg";

import "../../App.css";
import "./content.css";

const Content = (props) => {
  const { products, currentQty, setCurrentQty } = props;

  const addOn = () => {
    setCurrentQty(currentQty + 1);
  };

  const remove = () => {
    if (!currentQty <= 0) {
      setCurrentQty(currentQty - 1);
    }
  };

  return (
    <>
      <div className="c-div">
        <h1 className="c-h1">Sneaker Company</h1>
        <h2 className="c-h2">Fall Limited Edition Sneakers</h2>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <p className="c-p">{product.description}</p>
              <div className="prices">
                <div>
                  <span>{product.price}</span> <span>{product.discount}</span>
                </div>
                <p>{product.formerPrice}</p>
              </div>
              <div className="quantity-add">
                <div className="quantity">
                  <button onClick={() => remove()}>
                    <img src={minus} alt="" />
                  </button>

                  <span>{currentQty}</span>

                  <button onClick={() => addOn()}>
                    <img src={plus} alt="" />
                  </button>
                </div>

                <button className="addBtn">
                  <img src={cart} alt="" />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </>
  );
};

export default Content;
