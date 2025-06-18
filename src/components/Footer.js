import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <h3>About Us</h3>
        <p>Your trusted E-commerce platform for electronics, mobiles, and more.</p>
      </div>

      <div className="footer-section links">
        <h3>Useful Links</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Return Policy</li>
          <li>FAQs</li>
        </ul>
      </div>

      <div className="footer-section payments">
        <h3>Payment Options</h3>
        <div className="payment-icons">
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt=''></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
