import React, { useState, useEffect } from 'react';
import Slide1 from '../../assets/images/8.jpg';
import Slide2 from '../../assets/images/hero8.jpg';
import Slide3 from '../../assets/images/2.jpg';
import PrimaryButton from '../ui/PrimaryButton';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: 'image',
      media: Slide1,
      title: 'Transform Your Mind, Heal Your Life',
      subtitle: 'Discover the power of hypnotherapy to overcome challenges, reduce stress, and achieve lasting inner peace and well-being.'
    },
    {
      type: 'image',
      media: Slide2,
      title: 'Professional Hypnotherapy Services',
      subtitle: 'Expert guidance in migraine relief, anxiety management, sleep improvement, and emotional healing through proven techniques.'
    },
    {
      type: 'image',
      media: Slide3,
      title: 'Your Journey to Wellness Starts Here',
      subtitle: 'Empowering your mind for healing, transformation, and lasting well-being with personalized hypnotherapy sessions.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Media */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {slide.type === 'video' ? (
            <video
              src={slide.media}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.media}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3A6EA5]/80 to-[#1E3A5F]/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center left-5 md:left-20">
        <div className="text-start text-white px-4 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold font-secondary mb-6">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl font-cursive mb-8 max-w-3xl">
            {slides[currentSlide].subtitle}
          </p>
          <PrimaryButton variant="outline" size="medium" className="px-6 py-3">
            Get Started Today
          </PrimaryButton>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/10'
              }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Hero;