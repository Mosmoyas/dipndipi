import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import images from './index';

const foodImages = [
  images.fr1,
  images.fr10,
  images.fr11,
  images.fr12,
  images.fr13,
  images.fr14,
  images.fr15,
  images.fr16,
  images.fr17,
  images.fr18,
  images.fr19,
  images.fr2,
  images.fr20,
  images.fr21,
  images.fr22,
  images.fr23,
  images.fr24,
  images.fr25,
  images.fr26,
  images.fr27,
  images.fr28,
  images.fr29,
  images.fr3,
  images.fr4,
  images.fr5,
  images.fr6,
  images.fr7,
  images.fr8,
  images.fr9,
]

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const changeSlide = (index) => {
    const captionElement = document.getElementById("caption");
    captionElement.style.backgroundImage = `url(${foodImages[index]})`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlideIndex < foodImages.length - 1) {
        setCurrentSlideIndex(currentSlideIndex + 1);
        changeSlide(currentSlideIndex + 1);
      } else {
        setCurrentSlideIndex(0);
        changeSlide(0);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <>
      <div className="lang">
        <div>
          <Link to="/fooden" className="bton">
            Food
          </Link>
        </div>
        <div>
          <Link to="/chocolateen" className="bton">
            Chocolate
          </Link>
        </div>
        <div>
          <Link to="/drinkseen" className="bton">
            Drinks
          </Link>
        </div>
        <div>
          <Link to="/shishaen" className="bton">
            Shsiha
          </Link>
        </div>
      </div>
      <div id="body" className="slider-container">
        <div id="caption" className="caption"></div>
      </div>
    </>
  );
};

export default Home;
