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
          <img src="https://img.icons8.com/?size=96&id=13608&format=png" alt=''></img>
          <img src="https://img.icons8.com/?size=160&id=pNfxhf2SghvK&format=png" alt=''></img>
          <img src="https://img.icons8.com/?size=96&id=13641&format=png" alt=''></img>
          <img src="https://img.icons8.com/?size=96&id=20798&format=png" alt=''></img>
          <img src="https://img.icons8.com/?size=96&id=5JTcb83oDGrE&format=png" alt=''></img>
          <img src="https://img.icons8.com/?size=96&id=ikzPviNiCGWG&format=png" alt=''></img>
          <img src="https://cdn-icons-png.flaticon.com/128/10714/10714148.png" alt=''></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
