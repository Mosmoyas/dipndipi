import React, { useState,useEffect } from "react";
import './imageSlider.css'
import { images } from "../../constants";

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            src: images.breakfast_for_3_person,
            alt: "Breakfast for one person",
        },
        {
            src: images.vegetables,
            alt: "Fresh vegetables",
        },
        {
            src: images.breakfast_for_3_person,
            alt: "Breakfast for three people",
        },
        {
            src: images.chicken_caesar,
            alt: "Chicken caesar salad",
        },
    ];

    const renderSlides = () => {
        return slides.map((slide, index) => (
            <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={index === currentSlide ? "active" : ""}
            />
        ));
    };

    const renderNavigation = () => {
        return (
            <div className="navigation">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? "active" : ""}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <div className="slider">
            <div className="image-conatiner">{renderSlides()}</div>
            {renderNavigation()}
        </div>
    );
};

export default ImageSlider;



// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { images } from "../../constants";
// import './imageSlider.css'



// const ImageSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 200,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     return (
//         <Slider {...settings}>
//             <div>
//                 <img src={images.cappuccino} alt="Image 1" />
//             </div>
//             <div>
//                 <img src={images.smores_toasted} alt="Image 2" />
//             </div>
//             <div>
//                 <img src={images.cafe_americano}   alt="Image 3" />
//             </div>
//         </Slider>
//     );
// };

// export default ImageSlider;
