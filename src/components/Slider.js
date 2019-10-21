import React from "react";
import { Zoom } from "react-slideshow-image";

const images = [
  'https://source.unsplash.com/collection/190727/1000x400',
  'https://source.unsplash.com/collection/190728/1000x400'
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const Slider = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt="img"/>)
          }
        </Zoom>
      </div>
    )
}

export default Slider;
