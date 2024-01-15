'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';

interface CarouselProps {
  totalSlides: number;
}

const Carousel: React.FC<CarouselProps> = ({ totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentSlide, totalSlides]);
  

  const nextSlide = () => setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  const prevSlide = () => setCurrentSlide((prevSlide) => (prevSlide - 2 + totalSlides) % totalSlides + 1);

  const commonStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    transition: "opacity 1s ease-in-out",
    width: "100%",
    height: "480px",
  };

  const slides = [
    { src: "/images/1.png", text: "Score Big with Melbourne's Unforgettable Sports Events", section: 'events-section' },
    { src: "/images/3.png", text: "Your Map to Melbourne's Must-See Iconic Points of Interest", section: 'landmarks-section' },
    { src: "/images/5.png", text: "Embrace the Excitement: Melbourne's Festivals Await You", section: 'events-section' },
    { src: "/images/vegemite.jpeg", text: "Get a fair dinkum Aussie experience with our Trivia game", section: 'games-section' }
  ];

  return (
    <div className="carousel w-full relative" style={{ height: "500px" }}>
      {slides.map((slide, index) => (
        <div key={index} style={currentSlide === index + 1 ? { ...commonStyles, ...{ opacity: 1, zIndex: 1 } } : commonStyles}>
          {/* With this line */}
          <Image 
            src={slide.src} 
            alt={`Slide ${index + 1}`} 
            width={1000} // Replace with your image's width
            height={500} // Replace with your image's height
            layout='responsive' 
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <span
              className="text-white bg-opacity-50 p-2"
              style={{ fontSize: '4vw', fontFamily: 'Porcelain, sans-serif', WebkitTextStroke: '0.5px black',  
              textStroke: '1px black' }}>
              {slide.text}
            </span>
          </div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <div className="card-actions flex justify-center items-center flex flex-col p-6">
              <button
                type="button"
                className="btn md:w-auto"
                style={{ backgroundColor: '#39918C', color: 'white' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2D7169'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#39918C'}
                onClick={() => {
                  const ourServicesSection = document.getElementById(slide.section);
                  if (ourServicesSection) {
                    ourServicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Discover Now!
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-10">
        <button onClick={prevSlide} className="btn btn-circle bg-transparent focus:outline-none">❮</button>
        <button onClick={nextSlide} className="btn btn-circle bg-transparent focus:outline-none">❯</button>
      </div>
    </div>
  );
};

export default Carousel;
