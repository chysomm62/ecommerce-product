import React from "react";

import imatar from "../../images/image-product-1.jpg";
import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";

import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="carousel">
        <img
          src={imatar}
          alt=""
          style={{
            maxWidth: "100%",
          }}
        />
        <button className="previous">
          <img src={previous} alt="" />
        </button>
        <button className="next">
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Header;
