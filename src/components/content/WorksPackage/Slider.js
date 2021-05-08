import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Slider(params) {
  const [current, setCurrent] = useState(0);
  const length = params.modalData.length;

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prewSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(params.modalData) || params.modalData.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleRight
        className="slider__left-arrow"
        onClick={prewSlide}
      />
      <FaArrowAltCircleLeft
        className="slider__right-arrow"
        onClick={nextSlide}
      />
      {params.modalData &&
        params.modalData.map((image, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={image.default}
                  alt="photo"
                  className="slider__image"
                />
              )}
            </div>
          );
        })}
    </section>
  );
}
