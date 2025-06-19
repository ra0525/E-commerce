import React from 'react';
import { useWishlist } from './WishlistContext';
import { Link } from 'react-router-dom';
import '../styles/Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.images[0]} alt={item.name} className="wishlist-img" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="wishlist-buttons">
                <Link to={`/product/${item.id}`} className="view-details-btn">View Details</Link>
                <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
