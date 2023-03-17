import React, { useState, useEffect } from "react";
import "./style.css";

const Slider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide) => (currentSlide + 1) % children.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [children]);

    return (
        <div className="slider">
            <div className="slides">{children[currentSlide]}</div>

            <NavigationAuto
                length={children.length}
                currentSlide={currentSlide}
                onSlideClick={(index) => setCurrentSlide(index)}
            />

            <NavigationManual
                length={children.length}
                currentSlide={currentSlide}
                onSlideClick={(index) => setCurrentSlide(index)}
            />
        </div>
    );
};

const Slide = ({ children }) => {
    return <div className="slide">{children}</div>;
};

const RadioButton = ({ id }) => {
    return <input type="radio" name="radio-btn" id={id} />;
};

const NavigationAuto = ({ length, currentSlide, onSlideClick }) => {
    return (
        <div className="navigation-auto">
            {Array.from({ length }).map((_, index) => (
                <AutoBtn
                    key={index}
                    active={index === currentSlide}
                    onClick={() => onSlideClick(index)}
                />
            ))}
        </div>
    );
};

const AutoBtn = ({ active, onClick }) => {
    return <div className={`auto-btn ${active ? "active" : ""}`} onClick={onClick} />;
};

const NavigationManual = ({ length, currentSlide, onSlideClick }) => {
    return (
        <div className="navigation-manual">
            {Array.from({ length }).map((_, index) => (
                <ManualBtn
                    key={index}
                    active={index === currentSlide}
                    onClick={() => onSlideClick(index)}
                />
            ))}
        </div>
    );
};

const ManualBtn = ({ active, onClick }) => {
    return <label className={`manual-btn ${active ? "active" : ""}`} onClick={onClick} />;
};

const App = () => {
    return (
        <Slider>
            <Slide>
                <img src="./images/breakfast_for_one_person.jpg" alt="" />
            </Slide>
            <Slide>
                <img src="./images/vegetables.jpg" alt="" />
            </Slide>
            <Slide>
                <img src="./images/breakfast_for_3_person.jpg" alt="" />
            </Slide>
            <Slide>
                <img src="./images/chicken_caesar.jpg" alt="" />
            </Slide>
        </Slider>
    );
};

export default App;
