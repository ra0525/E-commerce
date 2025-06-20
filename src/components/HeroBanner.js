import React, { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';

const bannerImages = [
  'https://t3.ftcdn.net/jpg/11/71/86/44/240_F_1171864429_maxllHmtJcykhBwF4hZviADOlHgxDSpG.jpg',
  'https://t4.ftcdn.net/jpg/09/37/27/43/240_F_937274351_a72mEbYugYCOGTClHADF6X4OW2ysF8rc.jpg',
  'https://t4.ftcdn.net/jpg/03/15/69/63/240_F_315696377_HRmVCZMxQ2y33Nnd8aHxyJBMuP3HcR1j.jpg',
  'https://t3.ftcdn.net/jpg/12/69/40/34/240_F_1269403499_YZoCeCMNO0GaG0RpjeXLWzbc8HUmusri.jpg',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000); // Change slide every 5 sec

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? bannerImages.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % bannerImages.length);
  };

  return (
    <div className="hero-banner">
      <button className="arrow left" onClick={prevSlide}>&#10094;</button>
      <img src={bannerImages[currentIndex]} alt={`Banner ${currentIndex + 1}`} className="banner-image" />
      <button className="arrow right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default HeroBanner;
