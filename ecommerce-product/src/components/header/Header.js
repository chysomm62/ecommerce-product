import React from "react";
import imatar from "../../images/image-product-1.jpg";

const Header = () => {
  return (
    <div>
      <img
        src={imatar}
        alt=""
        style={{
          maxWidth: "400px",
        }}
      />
    </div>
  );
};

export default Header;
