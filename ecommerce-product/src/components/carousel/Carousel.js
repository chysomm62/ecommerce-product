import { CarouselData } from "./CarouselData";
import { useState } from "react";
import previous from "../../images/icon-previous.svg";
import next from "../../images/icon-next.svg";
// import imatar from "../../images/image-product-1.jpg";

const Carousel = ({ slides }) => {
  const [current, SetCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    SetCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    SetCurrent(current === 0 ? length - 1 : current - 1);
  };

  const byThumbnail = (index) => {
    SetCurrent(index);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="carousel">
        {CarouselData.map((slide, index) => {
          return (
            <>
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <img
                    src={slide.image}
                    alt=""
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                )}
              </div>
            </>
          );
        })}

        <button className="previous" onClick={prevSlide}>
          <img src={previous} alt="" />
        </button>
        <button className="next" onClick={nextSlide}>
          <img src={next} alt="" />
        </button>
      </div>
      <div className="thumbnail">
        {CarouselData.map((thumb, index) => {
          return (
            <>
              <div
                className={index === current ? "thumb-active" : "thumb"}
                key={index}
                onClick={() => byThumbnail(index)}
              >
                <img src={thumb.thumbnail} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;
