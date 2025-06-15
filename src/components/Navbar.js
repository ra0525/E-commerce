import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import '../styles/Navbar.css';


const Navbar = () => {
  const { getTotalUniqueItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">My E-Commerce Store</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({getTotalUniqueItems()})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
