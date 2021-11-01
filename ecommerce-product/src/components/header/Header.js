import React from "react";

import "./header.css";
import Carousel from "../carousel/Carousel";
import { CarouselData } from "../carousel/CarouselData";

const Header = () => {
  return (
    <div>
      <Carousel slides={CarouselData} />
    </div>
  );
};

export default Header;
