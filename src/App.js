import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import './App.css';
import { WishlistProvider } from './components/WishlistContext';
import Wishlist from './components/Wishlist';

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            {/* <HeroBanner /> */}
            <div className="content-wrap">
              {/* <HeroBanner /> */}
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
