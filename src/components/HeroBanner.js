import React, { useState, useEffect } from 'react';
import '../styles/HeroBanner.css';

const bannerImages = [
  'https://www.shutterstock.com/shutterstock/photos/2056851839/display_1500/stock-vector--d-yellow-great-discount-sale-background-illustration-of-large-sale-word-with-shopping-cart-gift-2056851839.jpg',
  'https://th.bing.com/th/id/OIG4.YEQ2mR1qlFsXY0vuZyb3?w=1024&h=1024&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3',
  // 'https://lh3.googleusercontent.com/gg-dl/AJfQ9KSyNO4qzkItyG_kdK_GQ3gk7BnxD5r7-QsM_ehiZzR4a82GQc73Ohwkd5HRsdMKFlyDpJcKJMaNFrN8oVhhjcmwqjkh2Jfk68dKqnE0KbLi4uHINS8wtYXNwYctTIpJOC0mtfSBVQNKQLfSf6XJImUY04ST7kvgLPDENqxehUummwrC=s1024',
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
