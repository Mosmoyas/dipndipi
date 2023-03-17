import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import images from './index2';


const theimages = [
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (index) => {
    const el = document.getElementById("caption");
    el.style.backgroundImage = `url(${theimages[index]})`;

  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < theimages.length - 1) {
        setCurrentIndex(currentIndex + 1);
        changeImage(currentIndex + 1);
      } else {
        setCurrentIndex(0);
        changeImage(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="body" className="slider-container">
      <div id='caption' className="caption">
        <div className="zindex">
        <div className="heads">
          <h1>Welcome To DipnDip</h1>
          <p>Speak with the Taste</p>
        </div>
        <div className="lang">
          <Link href="/" className=" bton">
            Arabic
          </Link>
          <Link href="/" className="bton">
            English
          </Link>
        </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
