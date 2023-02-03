/* HousingCarousel component
  Manage the housing images carousel.
  Requirements:
  - When there is only one picture, the left and right arrows are not displayed
  - When first picture shown and left arrow clicked, then last picture is shown.
  - Opposite logic with last picture shown and right array clicked. Then first picture is shown.
  - The counter on bottom is not visible on mobile mode.
  - Pictures are displayed as background of the block using a style tag
*/
import { useState } from "react";
import arrowLeft from "../../../assets/arrowLeft.png";
import arrowRight from "../../../assets/arrowRight.png";

function HousingCarousel({ pictures }) {
  const [currentImage, setCurrent] = useState(0);
  const length = pictures.length;
  const slideNumber = `${currentImage + 1}  /  ${length}`;

  const slideBackground = {
    backgroundImage: "url(" + pictures[currentImage] + ")",
  };

  const nextImage = () => {
    setCurrent(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const previousImage = () => {
    setCurrent(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className="housing-carousel-container">
      <div style={slideBackground} className="housing-carousel-container-slide">
        <img
          src={arrowLeft}
          alt="Flèche défilement prise de vue précédente"
          className={
            length > 1
              ? "housing-carousel-container-slide-arrow left"
              : "housing-carousel-container-slide-arrow off"
          }
          onClick={previousImage}
        />

        <span className="housing-carousel-container-slide-number">
          {slideNumber}
        </span>

        <img
          src={arrowRight}
          alt="Flèche défilement prise de vue suivante"
          className={
            length > 1
              ? "housing-carousel-container-slide-arrow right"
              : "housing-carousel-container-slide-arrow off"
          }
          onClick={nextImage}
        />
      </div>
    </section>
  );
}

HousingCarousel.defaultProps = {
  pictures: [],
};

export default HousingCarousel;
