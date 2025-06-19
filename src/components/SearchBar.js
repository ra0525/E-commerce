import React from 'react';
import '../styles/SearchBar.css';
import { Link } from 'react-router-dom';
import { useWishlist } from './WishlistContext';
import { FaHeart } from 'react-icons/fa';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const { getTotalWishlistItems } = useWishlist();
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <Link to="/wishlist" className="navbar-link">
          <FaHeart className="wishlist-icon" /> Wishlist ({getTotalWishlistItems()})
      </Link>
    </div>
  );
};

export default SearchBar;
