import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  "https://via.placeholder.com/1200x400/ff0000/ffffff?text=Slide+1",
  "https://via.placeholder.com/1200x400/00ff00/ffffff?text=Slide+2",
  "https://via.placeholder.com/1200x400/0000ff/ffffff?text=Slide+3"
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[current]} alt="slide" className="slide-image" />
    </div>
  );
};

export default Slider;
