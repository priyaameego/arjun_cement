import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const slides = [
  {
    image: 'https://arjuncement.com/images/03.jpg',
    title: 'Cementing the dreams of our Nation'
  },
  {
    image: 'https://arjuncement.com/images/06.jpg',
    title: 'State of the art Machinery'
  },
  {
    image: 'https://arjuncement.com/images/cem1.jpg',
    title: 'Producing Quality Products'
  },
  {
    image: 'https://arjuncement.com/images/cem2.jpg',
    title: 'Producing Fine Products'
  },
  {
    image: 'https://arjuncement.com/images/10.jpg',
    title: 'Giving you better Quality and Sustainable Products'
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content container">
            <h1 className="slide-title animate-fade-in">{slide.title}</h1>
          </div>
        </div>
      ))}
      <div className="slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
