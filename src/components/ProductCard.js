import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';
import StarRating from './StarRating';
import { useWishlist } from './WishlistContext';

const ProductCard = ({ product }) => {
  const { addToWishlist } = useWishlist();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.images[0]} alt={product.name} className="product-image"/>
        <h3>{product.name}</h3>
      </Link>
      <p className='price'>₹{product.price}</p>
      <div className="rating-center">
        <StarRating rating={product.rating} size= {18} />
      </div>
      <button className="add-to-wishlist-btn" onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default ProductCard;
