import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="content-wrap">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
