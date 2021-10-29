import React from "react";

import "./header.css";
import Carousel from "../carousel/Carousel";
import { CarouselData } from "../carousel/CarouselData";
import CartModal from "../modals/CartModal";

const Header = () => {
  return (
    <div>
      <Carousel slides={CarouselData} />
      <CartModal />
    </div>
  );
};

export default Header;
