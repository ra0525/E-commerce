import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#f0c14b" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#f0c14b" />);
    } else {
      stars.push(<FaRegStar key={i} color="#f0c14b" />);
    }
  }

  return (
    <div className="star-rating">
      <span className="rating-number">{rating}</span> {stars}
    </div>
  );
};

export default StarRating;
