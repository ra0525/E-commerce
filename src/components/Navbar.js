import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopifyClone</Link>
      <Link to="/cart" className="cart-link">
        Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
      </Link>
    </nav>
  );
};

export default Navbar;
