import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import '../styles/Navbar.css';


const Navbar = () => {
  const { getTotalUniqueItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-section left">
        <Link to="/" className="navbar-link left">Home</Link>
      </div>
      <div className="navbar-section center">
        <h1 className="navbar-title">E-commerce Store</h1>
      </div>
      <div className="navbar-section right">
        <Link to="/cart" className="navbar-link right">Cart ({getTotalUniqueItems()})</Link>
      </div>
    </nav>
  );

};

export default Navbar;
