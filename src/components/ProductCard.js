import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.name} className="product-image"/>
        <h3>{product.name}</h3>
      </Link>
      <p>₹{product.price}</p>
      <p>Rating: {product.rating}⭐</p>
    </div>
  );
};

export default ProductCard;
