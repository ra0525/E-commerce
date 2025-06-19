import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";
import "../styles/ProductDetails.css";
import { useCart } from "./CartContext";
import StarRating from './StarRating';
import { useWishlist } from './WishlistContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  if (!product) return <div>Product not found</div>;

  const isScrollable = product.images.length > 6;

  return (
    <div className="product-details-container">
      <div className="image-section">
        <div className={`thumbnail-list ${isScrollable ? "scrollable" : ""}`}>
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="main-image-container">
          <img src={selectedImage} alt={product.name} className="main-image" />
        </div>
      </div>

      <div className="details-section">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <StarRating rating={product.rating} />

        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>

        <button className="add-to-cart-btn" onClick={() => addToWishlist(product)}>Add to Wishlist</button>

        <div className="section">
          <table className="spec-table">
            <tbody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td className="spec-key">{key}</td>
                  <td className="spec-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>About this item</h2>
          <ul className="about-list">
            {product.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h1>Product Information</h1>
          <h3>Technical Details</h3>
          <table className="tech-details-table">
            <tbody>
              {Object.entries(product.technicalDetails).map(([key, value], index) => (
                <tr key={index}>
                  <td className="tech-key">{key}</td>
                  <td className="tech-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
