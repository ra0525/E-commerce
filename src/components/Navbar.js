import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from './CartContext';
import LoginSignupModal from './LoginSignupModal'; 
import '../styles/Navbar.css';


const Navbar = () => {
  const { getTotalUniqueItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-section left">
        <Link to="/" className="navbar-link left">Home</Link>
      </div>
      <div className="navbar-section center">
        <h1 className="navbar-title">E-commerce Store</h1>
      </div>
      <div className="navbar-section right">
        <Link to="/" className="nav-button" onClick={() => setIsModalOpen(true)}>Login</Link>
        <Link to="/cart" className="navbar-link right">
          <FaShoppingCart className="cart-icon" />
          Cart ({getTotalUniqueItems()})
        </Link>
      </div>
      <LoginSignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* {showModal && <LoginSignupModal onClose={() => setShowModal(false)} />} */}
    </nav>
  );

};

export default Navbar;
